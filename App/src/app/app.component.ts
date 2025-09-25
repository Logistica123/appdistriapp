import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Animation, AnimationController, Platform, PopoverController} from '@ionic/angular';
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

    // appPages = [];

    public appPages = [
        {
            title: 'DISTRIBUCIÓN URBANA',
            url: '/urban-distribution-list',
            icon: 'assets/icons/menu/distribucion.svg'
        },
        {
            title: 'VIAJES',
            url: '/journey-list',
            icon: 'assets/icons/menu/viajes.svg'
        },
        {
            title: 'CONTROLES',
            url: '/control-tabs/operation-control',
            icon: 'assets/icons/menu/mantenimiento.svg'
        },
        {
            title: 'Billetera',
            url: '/wallet-transaction-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        },
        {
            title: 'Ranking',
            url: '/ranking',
            icon: 'assets/icons/menu/mantenimiento.svg'
        },
        {
            title: 'MANTENIMIENTO',
            url: '/document-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        },
        {
            title: 'RECORDATORIOS',
            url: '/reminder-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        },
        {
            title: 'NOTIFICACIONES',
            url: '/notification-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        },
        {
            title: 'PROPONER MEJORAS',
            url: '/suggestion-form',
            icon: 'assets/icons/menu/proponermejoras.svg'
        },
        {
            title: 'PERFIL',
            url: '/profile/profile-data',
            icon: 'assets/icons/menu/proponermejoras.svg'
        },
        {
            title: 'AYUDA',
            url: '/help',
            icon: 'assets/icons/menu/ayuda.svg'
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
        private appRate: AppRate
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
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

    }

    ngOnDestroy() {
        // if (this.driverSubscription) {
        //     this.driverSubscription.unsubscribe();
        // }
    }

    pushAllPages() {
        this.appPages.push({
            title: 'DISTRIBUCIÓN URBANA',
            url: '/urban-distribution-list',
            icon: 'assets/icons/menu/distribucion.svg'
        });
        this.appPages.push({
            title: 'VIAJES',
            url: '/journey-list',
            icon: 'assets/icons/menu/viajes.svg'
        });
        this.appPages.push({
            title: 'CONTROLES',
            url: '/control-tabs/operation-control',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'Billetera',
            url: '/wallet-transaction-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'Ranking',
            url: '/ranking',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'MANTENIMIENTO',
            url: '/document-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'RECORDATORIOS',
            url: '/reminder-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'NOTIFICACIONES',
            url: '/notification-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'PROPONER MEJORAS',
            url: '/suggestion-form',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'PERFIL',
            url: '/profile/profile-data',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'AYUDA',
            url: '/help',
            icon: 'assets/icons/menu/ayuda.svg'
        });
    }

    pushLimitedPages() {
        this.appPages.push({
            title: 'DISTRIBUCIÓN URBANA',
            url: '/urban-distribution-list',
            icon: 'assets/icons/menu/distribucion.svg'
        });
        this.appPages.push({
            title: 'VIAJES',
            url: '/journey-list',
            icon: 'assets/icons/menu/viajes.svg'
        });
        this.appPages.push({
            title: 'CONTROLES',
            url: '/control-tabs/operation-control',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'MANTENIMIENTO',
            url: '/document-list',
            icon: 'assets/icons/menu/mantenimiento.svg'
        });
        this.appPages.push({
            title: 'RECORDATORIOS',
            url: '/reminder-list',
            icon: 'assets/icons/menu/notificaciones.svg'
        });
        this.appPages.push({
            title: 'PROPONER MEJORAS',
            url: '/suggestion-form',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'PERFIL',
            url: '/profile/profile-data',
            icon: 'assets/icons/menu/proponermejoras.svg'
        });
        this.appPages.push({
            title: 'AYUDA',
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
