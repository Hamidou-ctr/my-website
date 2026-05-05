import { Pipe, PipeTransform, inject, OnDestroy } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private translationService = inject(TranslationService);
  private lastKey: string = '';
  private lastValue: string = '';
  private lastVersion: number = 0;

  transform(key: string): string {
    const currentVersion = this.translationService.translationsVersion();

    // Wenn sich die Version oder der Key geändert hat, neu übersetzen
    if (key !== this.lastKey || currentVersion !== this.lastVersion) {
      this.lastKey = key;
      this.lastVersion = currentVersion;
      this.lastValue = this.translationService.translate(key);
    }

    return this.lastValue;
  }

  ngOnDestroy() {}
}
