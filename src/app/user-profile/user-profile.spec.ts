// user-profile.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { UserProfile } from './user-profile';
describe('UserProfile', () => {
  it('should display user ID from route parameters', async () => {
    TestBed.configureTestingModule({
      imports: [UserProfile],
      providers: [
        provideRouter([
          { path: 'user/:id', component: UserProfile }
        ])
      ]
    });
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/user/123', UserProfile);
    expect(harness.routeNativeElement?.textContent).toContain('User Profile: 123');
  });
});