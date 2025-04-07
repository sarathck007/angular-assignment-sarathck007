import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  feedbackForm: FormGroup;
  submitted = false;
  
  // Feedback categories
  categories = [
    { id: 'app', label: 'Application Feedback' },
    { id: 'ui', label: 'User Interface' },
    { id: 'feature', label: 'Feature Request' },
    { id: 'bug', label: 'Bug Report' },
    { id: 'other', label: 'Other' }
  ];
  
  // Rating options
  ratings = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      category: ['', Validators.required],
      rating: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(10)]],
      subscribe: [false]
    });
  }

  hasError(field: string): boolean {
    const control = this.feedbackForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Feedback submitted:', this.feedbackForm.value);
      this.submitted = true;
      
      // In a real app, you would send this data to a server
      // this.someService.submitFeedback(this.feedbackForm.value).subscribe(...);
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.feedbackForm.controls).forEach(key => {
        const control = this.feedbackForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  resetForm(): void {
    this.feedbackForm.reset();
    this.submitted = false;
  }
}