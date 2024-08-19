const timeElement = document.querySelector(".time");
const buttonRegisterElement = document.querySelector(".btn-register");
const buttonLoginElement = document.querySelector(".btn-login");
const buttonCheckedElement = document.querySelector(".btn-checked");
const buttonMainAppElement = document.querySelector(".btn-main-app");
const mainAppElement = document.querySelector(".main-app");
const pageContactWithUsElement = document.querySelector(
  ".page-contact-with-us"
);
const pageRegisterLoginElement = document.querySelector(".page-register-login");
const emailTokenElement = document.querySelector(".email-Token");
const openEyePasswordLoginElement = document.getElementById(
  "opened-eye-pass-login"
);
const closedEyePasswordLoginElement = document.getElementById(
  "closed-eye-pass-login"
);
const lightPasswordLoginElement = document.getElementById(
  "light-password-login"
);
const openEyePasswordRegisterElement = document.getElementById(
  "opened-eye-pass-register"
);
const closedEyePasswordRegisterElement = document.getElementById(
  "closed-eye-pass-register"
);
const lightPasswordRegisterElement = document.getElementById(
  "light-password-register"
);
const openEyeConfirmPasswordRegisterElement = document.getElementById(
  "opened-eye-confirm-pass-register"
);
const closedEyeConfirmPasswordRegisterElement = document.getElementById(
  "closed-eye-confirm-pass-register"
);
const lightConfirmPasswordRegisterElement = document.getElementById(
  "light-confirm-password-register"
);
const passwordInputRegister = document.getElementById("password-register");
const errorPasswordInputRegister = document.querySelector(
  ".error-password-register"
);

const confirmPasswordInputRegister = document.getElementById(
  "confirm-password-register"
);
const errorConfirmPasswordInput = document.querySelector(
  ".error-confirm-password"
);
const btnExitAccount = document.querySelector(".btn-exit-account");
const formNameElement = document.querySelector(".formName");
const letterElement = document.querySelector(".letter");
const boxShowElement = document.querySelectorAll(".box-show");
const loginFormElement = document.querySelector(".login-form");
const formsElement = document.querySelector(".forms");
const emailInputLogin = document.getElementById("email-login");
const errorEmailInputLogin = document.querySelector(".error-email-login");
const passwordInputLogin = document.getElementById("password-login");
const errorPasswordInputLogin = document.querySelector(".error-password-login");
const messageBoxElement = document.querySelector(".message-box");
const messageElement = document.querySelector(".message");

// Time Phone
function updateTime() {
  const date = new Date();
  timeElement.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
}
setInterval(updateTime, 1000);

buttonLoginElement.addEventListener("click", () => {
  buttonCheckedElement.style.right = "50%";
  formsElement.style.right = "-100%";
});

buttonRegisterElement.addEventListener("click", () => {
  buttonCheckedElement.style.right = "0";
  formsElement.style.right = "0%";
});

// Dom For Main APP
buttonMainAppElement.addEventListener("click", () => {
  mainAppElement.style.scale = "1";
  const isExistToken = localStorage.getItem("TOKEN");
  if (isExistToken) {
    pageRegisterLoginElement.style.display = "none";
    pageContactWithUsElement.style.display = "block";
    emailTokenElement.innerHTML = isExistToken;
  } else {
    pageContactWithUsElement.style.display = "none";
    pageRegisterLoginElement.style.display = "block";
  }
  const allCharacters = "FR efgijmorst";
  const nameForm = "Register Form";
  let letter = "";
  let i = 0;
  const intervalId = setInterval(() => {
    const randomNum = Math.floor(Math.random() * allCharacters.length);
    letter = allCharacters[randomNum];
    letterElement.innerHTML = letter;
    if (letter === nameForm[i]) {
      i++;
      formNameElement.innerHTML += letter;
      if (i === nameForm.length) {
        clearInterval(intervalId);
        letterElement.innerHTML = "";
        for (let i = 0; i < boxShowElement.length; i++) {
          ((i) => {
            setTimeout(() => {
              boxShowElement[i].style.left = "100%";
            }, i * 500);
          })(i);
        }
      }
    }
  }, 20);
  setTimeout(() => {
    const mainAppCoverElement = document.querySelector(".main-app-cover");
    mainAppCoverElement.style.top = "100%";
  }, 6000);
});

// Show Passwords
// Show password Register
openEyePasswordRegisterElement.addEventListener("click", () => {
  lightPasswordRegisterElement.style.display = "block";
  closedEyePasswordRegisterElement.style.display = "block";
  openEyePasswordRegisterElement.style.display = "none";
  passwordInputRegister.type = "text";
});
closedEyePasswordRegisterElement.addEventListener("click", () => {
  lightPasswordRegisterElement.style.display = "none";
  openEyePasswordRegisterElement.style.display = "block";
  closedEyePasswordRegisterElement.style.display = "none";
  passwordInputRegister.type = "password";
});

// Show confirm Password
openEyeConfirmPasswordRegisterElement.addEventListener("click", () => {
  lightConfirmPasswordRegisterElement.style.display = "block";
  closedEyeConfirmPasswordRegisterElement.style.display = "block";
  openEyeConfirmPasswordRegisterElement.style.display = "none";
  confirmPasswordInputRegister.type = "text";
});
closedEyeConfirmPasswordRegisterElement.addEventListener("click", () => {
  lightConfirmPasswordRegisterElement.style.display = "none";
  openEyeConfirmPasswordRegisterElement.style.display = "block";
  closedEyeConfirmPasswordRegisterElement.style.display = "none";
  confirmPasswordInputRegister.type = "password";
});

// Show  Password Login
openEyePasswordLoginElement.addEventListener("click", () => {
  lightPasswordLoginElement.style.display = "block";
  closedEyePasswordLoginElement.style.display = "block";
  openEyePasswordLoginElement.style.display = "none";
  passwordInputLogin.type = "text";
});
closedEyePasswordLoginElement.addEventListener("click", () => {
  lightPasswordLoginElement.style.display = "none";
  openEyePasswordLoginElement.style.display = "block";
  closedEyePasswordLoginElement.style.display = "none";
  passwordInputLogin.type = "password";
});

let userRegister;
// Register From Handler
function submitRegisterHandler(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email-register");
  const errorEmailInput = document.querySelector(".error-email-register");
  const email = emailInput.value.trim();
  const confirmPasswordRegister = confirmPasswordInputRegister.value.trim();
  const password = passwordInputRegister.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorEmailInput.innerHTML = "Enter a valid email address";
  } else if (passwordInputRegister.value.trim().length < 4) {
    errorEmailInput.innerHTML = "";
    errorPasswordInputRegister.innerHTML =
      "Password must be at least 4 characters";
  } else if (confirmPasswordRegister.length < 4) {
    errorEmailInput.innerHTML = "";
    errorPasswordInputRegister.innerHTML = "";
    errorConfirmPasswordInput.innerHTML =
      "Confirm Password must be at least 4 characters";
  } else if (passwordInputRegister.value.trim() !== confirmPasswordRegister) {
    errorEmailInput.innerHTML = "";
    errorPasswordInputRegister.innerHTML = "";
    errorConfirmPasswordInput.innerHTML = "Passwords do not match";
  } else {
    const users = JSON.parse(localStorage.getItem("USERS")) || [];

    const isExistUser = users.filter((user) => user.email === email);
    if (isExistUser.length > 0) {
      messageBoxElement.style.scale = "1";
      messageElement.innerHTML = `     
      <p class='message-header'>Email Exist</p>
      <p class='message-text'>Email is exist</p>
      <div class='btns-group'>
        <button type="button" class="btn-ok">OK</button>
      </div>`;
      const btnOk = document.querySelector(".btn-ok");
      btnOk.addEventListener("click", () => {
        messageBoxElement.style.scale = "0";
      });
    } else {
      const user = { email, password };
      console.log(password);
      users.push(user);
      localStorage.removeItem("USERS");
      localStorage.setItem("USERS", JSON.stringify(users));
      buttonCheckedElement.style.right = "50%";
      formsElement.style.right = "-100%";
      emailInputLogin.value = user.email;
      passwordInputLogin.value = user.password;
    }
  }
}


// Login Form Handler
let token;
function submitLoginHandler(event) {
  event.preventDefault();

  const emailLogin = emailInputLogin.value.trim();
  const passwordLogin = passwordInputLogin.value.trim();

  const users = JSON.parse(localStorage.getItem("USERS"));
  isExistUser = users.filter((user) => {
    return user.email === emailLogin && user.password === passwordLogin;
  });
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailLogin) {
    errorEmailInputLogin.innerHTML = "Enter an email address";
  } else if (!emailPattern.test(emailLogin)) {
    errorEmailInputLogin.innerHTML = "Enter a valid email address";
  } else if (!passwordLogin) {
    errorEmailInputLogin.innerHTML = "";
    errorPasswordInputLogin.innerHTML = "Enter a valid password";
  } else if (isExistUser.length > 0) {
    errorPasswordInputLogin.innerHTML = "";
    errorEmailInputLogin.innerHTML = "";
    messageBoxElement.style.scale = "1";
    pageRegisterLoginElement.style.display = "none";
    pageContactWithUsElement.style.display = "block";
    token = emailLogin;
    localStorage.setItem("TOKEN", JSON.stringify(token));
    messageBoxElement.style.scale = "0";
    emailTokenElement.innerHTML = emailLogin;
  } else {
    errorPasswordInputLogin.innerHTML = "";
    errorEmailInputLogin.innerHTML = "";
    messageBoxElement.style.scale = "1";
    messageElement.innerHTML = `     
        <p class='message-header'>Incorrect</p>
        <p class='message-text'>Email or Password incorrect</p>
        <div class='btns-group'>
          <button type="button" class="btn-ok">OK</button>
        </div>`;
    const btnOk = document.querySelector(".btn-ok");
    btnOk.addEventListener("click", () => {
      messageBoxElement.style.scale = "0";
    });
  }
}

messageBoxElement.addEventListener("click", () => {
  messageBoxElement.style.scale = "0";
});
messageElement.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Exit acoount
btnExitAccount.addEventListener("click", () => {
  messageBoxElement.style.scale = "1";
  messageElement.innerHTML = `
        <p class='message-header'>Exit Account</p>
        <p class='message-text'>Are you sure to exit account?</p>
        <div class='btns-group'>
          <button type="button" class="btn-cancel">Cancel</button>
          <button type="button" class="btn-exit">YES</button>
        </div>
    `;
  const confirmCancel = document.querySelector(".btn-cancel");
  const confirmExit = document.querySelector(".btn-exit");

  confirmCancel.addEventListener("click", () => {
    messageBoxElement.style.scale = "0";
  });

  confirmExit.addEventListener("click", () => {
    messageBoxElement.style.scale = "0";
    localStorage.removeItem("TOKEN");
    pageContactWithUsElement.style.display = "none";
    pageRegisterLoginElement.style.display = "block";
    buttonCheckedElement.style.right = "50%";
    formsElement.style.right = "-100%";
  });
});
// Send Message Form Handler
function btnExitAccountHandler(event) {
  event.preventDefault();
  const errorMessageElement = document.querySelector(".error-contact");
  const messageInput = document.getElementById("message");
  const message = messageInput.value.trim();

  if (!message) {
    errorMessageElement.innerHTML = "fill the field";
  } else {
    errorMessageElement.innerHTML = "";
    messageBoxElement.style.scale = "1";
    messageElement.innerHTML = `
        <p class='message-header'>Recieved Message</p>
        <p class='message-text'>We have received your message and will respond possible.</p>
        <div class='btns-group'>
          <button type="button" class="btn-ok">OK</button>
        </div>`;
  }
  const btnOk = document.querySelector(".btn-ok");
  btnOk.addEventListener("click", () => {
    messageBoxElement.style.scale = "0";
  });
  messageInput.value = "";
}
