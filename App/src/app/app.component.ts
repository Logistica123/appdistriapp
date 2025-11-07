import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Animation, AnimationController, PopoverController, MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {DriverService} from './services/v1/driver.service';
import {Driver} from './interfaces/Driver';
import {DomSanitizer} from '@angular/platform-browser';
// import {PopoverServiceDetailsComponent} from './popover-service-details/popover-service-details.component';
import {PusherService} from './services/utils/pusher.service';
import {AuthService} from './services/v1/auth.service';
import {ServiceService} from './services/v1/service.service';
import {Service} from './interfaces/Service';
import {DeviceService} from './services/v1/device.service';
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
import {ToastComponent} from './components/toast/toast.component';
import {AppRate} from '@ionic-native/app-rate/ngx';
import {Subscription} from 'rxjs';
import {ThemeName, ThemeService} from './services/theme.service';

interface MenuPage {
    title: string;
    url: string;
    icon: string;
    subtitle?: string;
    badge?: string;
}

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('fabButtonAnim', {static: true}) fabButton: ElementRef;
    service: Service;
    showProfileImage = false;

    driver: Driver;
    profileImg: any;
    anim: Animation;
    activeService = false;
    driverSubscription: Subscription;
    currentTheme: ThemeName = 'theme-light';
    readonly defaultThemeLogo = 'assets/logo-empresa.png';
    themeLogoMap: Partial<Record<ThemeName, string>> = {
        'theme-light': 'assets/logo-empresa.png',
        'theme-dark': 'assets/logo-empresa.png'
    };
    menuLogoSrc = this.defaultThemeLogo;
    readonly themeToggleLabels: Record<ThemeName, string> = {
        'theme-light': 'Modo oscuro',
        'theme-dark': 'Modo claro'
    };
    readonly themeToggleIcons: Record<ThemeName, string> = {
        'theme-light': 'moon-outline',
        'theme-dark': 'sunny-outline'
    };
    isMobile = false;

    // appPages = [];

    public appPages: MenuPage[] = [
        {
            title: 'Distribución urbana',
            url: '/urban-distribution-list',
            icon: 'navigate-outline',
            subtitle: 'Entregas del día'
        },
        {
            title: 'Viajes',
            url: '/journey-list',
            icon: 'trail-sign-outline',
            subtitle: 'Planificá rutas'
        },
        {
            title: 'Controles',
            url: '/control-tabs/operation-control',
            icon: 'settings-outline',
            subtitle: 'Controles operativos'
        },
        {
            title: 'Billetera',
            url: '/wallet-transaction-list',
            icon: 'wallet-outline',
            subtitle: 'Movimientos de billetera'
        },
        {
            title: 'Ranking',
            url: '/ranking',
            icon: 'podium-outline',
            subtitle: 'Tu ranking'
        },
        {
            title: 'Mantenimiento',
            url: '/document-list',
            icon: 'construct-outline',
            subtitle: 'Documentos & vencim.'
        },
        {
            title: 'Recordatorios',
            url: '/reminder-list',
            icon: 'calendar-outline',
            subtitle: 'Recordatorios'
        },
        {
            title: 'Notificaciones',
            url: '/notification-list',
            icon: 'megaphone-outline',
            subtitle: 'Alertas'
        },
        {
            title: 'Beneficios',
            url: '/benefits',
            icon: 'sparkles-outline',
            subtitle: 'Promos exclusivas',
            badge: 'Nuevo'
        },
        {
            title: 'Reclamos',
            url: '/complaint-list',
            icon: 'chatbubble-ellipses-outline',
            subtitle: 'Reclamos'
        },
        {
            title: 'Liquidaciones',
            url: '/liquidation-list',
            icon: 'receipt-outline',
            subtitle: 'Liquidaciones'
        },
        {
            title: 'Proponer mejoras',
            url: '/suggestion-form',
            icon: 'bulb-outline',
            subtitle: 'Mejoras'
        },
        {
            title: 'Perfil',
            url: '/profile/profile-data',
            icon: 'id-card-outline',
            subtitle: 'Tus datos'
        },
        {
            title: 'Ayuda',
            url: '/help',
            icon: 'help-buoy-outline',
            subtitle: 'Ayuda y soporte'
        },
        {
            title: 'Juegos',
            url: '/games',
            icon: 'game-controller-outline',
            subtitle: 'Mini juegos'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private driverService: DriverService,
        private toastComponent: ToastComponent,
        private popoverController: PopoverController,
        private animationController: AnimationController,
        private pusherService: PusherService,
        private deviceService: DeviceService,
        private serviceService: ServiceService,
        private domSanitizer: DomSanitizer,
        private router: Router,
        private appRate: AppRate,
        private themeService: ThemeService,
        private menuController: MenuController
    ) {
        this.currentTheme = this.themeService.initializeTheme();
        this.syncThemeAssets(this.currentTheme);
        this.initializeApp();
    }

    private updateLayoutFlags() {
        this.isMobile = !this.platform.is('tablet') && (this.platform.is('mobile') || this.platform.width() < 768);
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.updateLayoutFlags();
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
            // this.listenForPusherEvents();
            // this.createAnimation();

            this.driverService.getDriver$()
                .subscribe(driver => {
                    console.log('************************************');
                    console.log('GOT DRIVER******************');
                    console.log('************************************');
                    console.log('************************************');

                    if (driver) {
                        // this.appPages = [];
                        this.showProfileImage = false;
                        this.driver = driver;
                        if (this.driver.has_profile_img) {
                            this.getProfileImage();
                        }
                        // this.driver.admin_created ? this.pushAllPages() : this.pushLimitedPages();
                    }
                });

            this.initAppRate();
            this.getFCMNotifications();
        });
    }

    ngOnInit(): void {
        // this.pushAllPages();
        this.updateLayoutFlags();
        this.platform.resize.subscribe(() => this.updateLayoutFlags());
    }

    ngOnDestroy() {
        // if (this.driverSubscription) {
        //     this.driverSubscription.unsubscribe();
        // }
    }

    toggleTheme(): void {
        this.currentTheme = this.themeService.toggleTheme(this.currentTheme);
        this.syncThemeAssets(this.currentTheme);
    }

    closeMenu(): void {
        if (this.menuController) {
            this.menuController.close();
        }
    }

    private syncThemeAssets(theme: ThemeName): void {
        const logo = this.themeLogoMap[theme] ?? this.defaultThemeLogo;
        this.menuLogoSrc = logo;
    }

    onMenuLogoError(): void {
        if (this.menuLogoSrc !== this.defaultThemeLogo) {
            this.menuLogoSrc = this.defaultThemeLogo;
        }
    }

    pushAllPages() {
        this.appPages.push({
            title: 'Distribución urbana',
            url: '/urban-distribution-list',
            icon: 'trail-sign-outline'
        });
        this.appPages.push({
            title: 'Viajes',
            url: '/journey-list',
            icon: 'map-outline'
        });
        this.appPages.push({
            title: 'Controles',
            url: '/control-tabs/operation-control',
            icon: 'options-outline'
        });
        this.appPages.push({
            title: 'Billetera',
            url: '/wallet-transaction-list',
            icon: 'wallet-outline'
        });
        this.appPages.push({
            title: 'Ranking',
            url: '/ranking',
            icon: 'trophy-outline'
        });
        this.appPages.push({
            title: 'Mantenimiento',
            url: '/document-list',
            icon: 'construct-outline'
        });
        this.appPages.push({
            title: 'Recordatorios',
            url: '/reminder-list',
            icon: 'alarm-outline'
        });
        this.appPages.push({
            title: 'Notificaciones',
            url: '/notification-list',
            icon: 'notifications-outline'
        });
        this.appPages.push({
            title: 'Seguros',
            url: '/insurance',
            icon: 'shield-checkmark-outline'
        });
        this.appPages.push({
            title: 'Proponer mejoras',
            url: '/suggestion-form',
            icon: 'bulb-outline'
        });
        this.appPages.push({
            title: 'Perfil',
            url: '/profile/profile-data',
            icon: 'person-circle-outline'
        });
        this.appPages.push({
            title: 'Ayuda',
            url: '/help',
            icon: 'help-circle-outline'
        });
    }

    pushLimitedPages() {
        this.appPages.push({
            title: 'Distribución urbana',
            url: '/urban-distribution-list',
            icon: 'assets/icons/menu/distribucion.svg'
        });
        this.appPages.push({
            title: 'Viajes',
            url: '/journey-list',
            icon: 'assets/icons/menu/viajes.svg'
        });
        this.appPages.push({
            title: 'Controles',
            url: '/control-tabs/operation-control',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'Mantenimiento',
            url: '/document-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'Recordatorios',
            url: '/reminder-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'Seguros',
            url: '/insurance',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'Proponer mejoras',
            url: '/suggestion-form',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'Perfil',
            url: '/profile/profile-data',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'Ayuda',
            url: '/help',
            icon: 'assets/icons/menu/ayuda.svg'
        });
    }

    getProfileImage() {
        this.driverService.getProfileImage()
            .subscribe((blob: any) => {
                const objectURL = URL.createObjectURL(blob);
                this.profileImg = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
                this.showProfileImage = true;
            });
    }

    createAnimation() {
        // setTimeout(() => {
        //   this.anim = this.animationController.create('myAnim');
        //   this.anim
        //     .addElement(this.fabButton.nativeElement)
        //     .duration(1000)
        //     .easing('ease-out')
        //     .fromTo('opacity', 1, 0.5)
        //     .iterations(Infinity);
        // }, 2000);
    }

    async showPopover(ev: any) {
        // const popover = await this.popoverController.create({
        //   component: PopoverServiceDetailsComponent,
        //   componentProps: {service: this.service},
        //   event: ev
        // });
        // await popover.present();
        // const {data} = await popover.onWillDismiss();
        // console.log(data);
        // if (!data?.success) {
        //   this.anim.stop();
        //   this.activeService = false;
        // }
    }

    listenForPusherEvents() {
        // this.authService.getAuthToken().then(authToken => {
        //   const pusher = this.pusherService.init(authToken);
        //   console.log(pusher);
        //   // const channelName = `private-admin.${localStorage.getItem('adminPusherId')}.service.created`;
        //   const channelName = `private-admin.1.service.created`;
        //   const channel = pusher.subscribe(channelName);
        //   console.log(channel);
        //   channel.bind('ServiceCreated', (data) => {
        //     console.log('GOT DATA FROM PUSHER!!!!!');
        //     console.log(data);
        //     if (data?.service) {
        //       this.service = data.service;
        //       console.log(this.service);
        //       this.activeService = true;
        //       this.anim.play();
        //     }
        //   });
        // });
    }

    getFCMNotifications() {
        FCM.requestPushPermission().then(() => {

        });

        FCM.onTokenRefresh().subscribe(token => {
            this.deviceService.storeFCMToken(token)
                .subscribe((response: any) => {
                    //
                }, err => {
                    //
                });
        });

        FCM.onNotification().subscribe(data => {
            if (data.wasTapped) {
                // app is closed - Received in background
                // alert(JSON.stringify(data.body));
            } else {
                // app is open - Received in foreground
                // alert(JSON.stringify(data));
                this.toastComponent.presentToast(data.body, 'top', 3500);
            }
        });
    }

    initAppRate() {
        // or, override the whole preferences object
        this.appRate.preferences = {
            usesUntilPrompt: 3,
            storeAppURL: {
                android: 'market://details?id=com.palmariusdev.distriapp',
            }
        };
        this.appRate.promptForRating(false);
    }
}
