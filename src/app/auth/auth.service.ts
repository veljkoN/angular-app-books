import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean = false

  
  isLoading:boolean = false
  
  

  constructor(private router:Router) {

  }

  login(form:LoginForm){
    if (this.isLoading) {
      return
    }
    this.isLoading =  true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated = true
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
      }).finally(() =>{
        this.isLoading =  false
      })
  } 

  passwordMatched:boolean = true

  //isLoading:boolean = false
  
  register(form:LoginForm & {confirm_password:string}) {
    if (this.isLoading) {
      return
    }
    this.isLoading =  true
    if (form.password !== form.confirm_password) {
      this.passwordMatched = false
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       this.isAuthenticated = true
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
      }).finally(() =>{
        this.isLoading =  false
      })
  }

  logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenticated = false
    }).catch((error) => {
      // An error happened.
    });
  }

}
