import { Injectable } from '@angular/core';

const THEME_STORAGE_KEY = 'app-theme';
type ThemeName = 'theme-light' | 'theme-dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private availableThemes: ThemeName[] = ['theme-light', 'theme-dark'];
  private defaultTheme: ThemeName = this.availableThemes[0];

  initializeTheme(): ThemeName {
    const storedTheme = this.readStoredTheme();
    const theme: ThemeName = storedTheme ?? this.defaultTheme;
    this.applyTheme(theme);
    if (!storedTheme) {
      this.persistTheme(theme);
    }
    return theme;
  }

  toggleTheme(current: ThemeName): ThemeName {
    const next = current === this.availableThemes[0] ? this.availableThemes[1] : this.availableThemes[0];
    this.applyTheme(next);
    this.persistTheme(next);
    return next;
  }

  private applyTheme(theme: ThemeName): void {
    if (!this.canAccessDom()) {
      return;
    }

    const doc = document;
    const targets: DOMTokenList[] = [
      doc.documentElement.classList,
      doc.body.classList
    ];

    const ionApp = doc.querySelector('ion-app');
    if (ionApp) {
      targets.push(ionApp.classList);
    }

    const appRoot = doc.querySelector('app-root');
    if (appRoot) {
      targets.push(appRoot.classList);
    }

    this.availableThemes.forEach(t => targets.forEach(cls => cls.remove(t)));
    targets.forEach(cls => cls.add(theme));
    if (typeof console !== 'undefined') {
      console.log('[ThemeService] applied theme', theme, targets.map(t => Array.from(t)));
    }
  }

  private readStoredTheme(): ThemeName | null {
    if (!this.canUseStorage()) {
      return null;
    }
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      return this.isValidTheme(stored) ? stored : null;
    } catch (error) {
      if (typeof console !== 'undefined') {
        console.warn('[ThemeService] unable to read stored theme', error);
      }
      return null;
    }
  }

  private persistTheme(theme: ThemeName): void {
    if (!this.canUseStorage()) {
      return;
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      if (typeof console !== 'undefined') {
        console.warn('[ThemeService] unable to persist theme', error);
      }
    }
  }

  private canUseStorage(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  private canAccessDom(): boolean {
    return typeof document !== 'undefined';
  }

  private isValidTheme(theme: string | null): theme is ThemeName {
    return !!theme && this.availableThemes.includes(theme as ThemeName);
  }
}
