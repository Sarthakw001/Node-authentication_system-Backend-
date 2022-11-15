# Authentication System
</br>

## Design of auth_system
</br>

![design](./Untitled%20(3).jpg)
</br>

### How to Use :
    - Clone the repo
    - Install the node_modules using the cmd " npm install "
    - In the .env file change the mongoDb URL, Since I have use the local-MongoDB link
    - Use your SECRET_KEY in .env 
    - Now Use Postman to hit the different route as : 
        - " / " -  Homepage  (GET)
        - " /register " - For SignUp (POST)
        - " /Login " - For SignIn (POST)
        - " /dashboard " - For accessing dashboard "only for LoggedIn User " (GET)