import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  private formspreeUrl = 'https://formspree.io/f/xqeywbok';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyAccepted: [false, Validators.requiredTrue],
    });
  }

  // Getter für einfacheren Zugriff im Template
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get privacyAccepted() {
    return this.contactForm.get('privacyAccepted');
  }

  // Füge diese Methode zu deiner Contact-Klasse hinzu
  togglePrivacy() {
    const currentValue = this.privacyAccepted?.value;
    this.contactForm.patchValue({ privacyAccepted: !currentValue });

    // Wenn das Feld bisher ungültig war und jetzt angeklickt wird,
    // markiere es als touched, um die Fehlermeldung zu aktivieren/deaktivieren
    if (!this.privacyAccepted?.touched) {
      this.privacyAccepted?.markAsTouched();
    }
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      // Markiere alle Felder als touched, um Fehler anzuzeigen
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // FormData für Formspree erstellen
    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('message', this.contactForm.get('message')?.value);

    // Anfrage an Formspree senden
    this.http
      .post(this.formspreeUrl, formData, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
          this.submitSuccess = true;
          this.contactForm.reset({
            name: '',
            email: '',
            message: '',
            privacyAccepted: false,
          });

          // Reset success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Form submission error', error);
          this.submitError = true;

          // Reset error message after 5 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
  }
}
