
> [!IMPORTANT]
> wip — this is a design doc to guide our initial prototype.



<br/></br>

# 🦐 shrimple.io
> *simplest cheapest auth in the world*

## 🍤 setup on shrimple.io
- login and click `create app`
- enter your `allowed origins`
- check on the `auth providers` you want to allow
- copy your `appId`

## 🍤 install shrimple into your web app
- it's gonna be easy, i promise 🙏
- install via npm
    ```bash
    npm install @e280/shrimple
    ```
- import shrimple, serverside or clientside
    ```js
    import shrimple from "@e280/shrimple"
    ```
- clientside javascript
    - setup
        ```js
        // 🦐 paste your appId from shrimple.io
        const appId = "5450372dcb89a55b70b363d66713afdced9faf521bc9daa9284f92b4bb04e668"

        const auth = await shrimple(appId)
        ```
    - react to login/logout happenings
        ```js
        auth.onChange(user => {
          if (user) console.log("logged in!", user.name)
          else console.log("logged out")
        })
        ```
    - trigger a login popup (must be on user event!)
        ```js
        auth.loginPopup()
        ```
    - grab the user token (send to your server in api requests)
        ```js
        auth.user?.token
        ```
    - logout
        ```js
        await auth.logout()
        ```
- serverside javascript to crypto-verify the user info
    ```js
    const user = await shrimple.verify(token)
    ```

## 🍤 nerdy details
- 🦐 **`user.id` — *string***  
  perma id for the user, like `"b4f405d674b4c6ab3f0002faee7be09de03b821ce5d3e928fb28a31be54a19ec"`
- 🦐 **`user.name` — *string***  
  a name/label/nickname, might be `"Bubba Gump"` or `"bubba"` or a randomly generated one like `"worluc.magbyl"`
- 🦐 **`user.email` — *string | null***  
  the user's email, like `bubba@shrimple.io`, but not all auth providers provide this  
- 🦐 **`user.provider` — *"authlocal" | "google" | "apple" | "microsoft"***  
  the name of the service that promised the login is legit
- 🦐 **`user.sessionId` — *string***  
  ephemeral id for this one login session, looks like `"3642b7a2ff316e43aff061ae021d69884484ed3286248fc10349ddee7902b146"`
- 🦐 **`user.token` — *string***  
  json web token for this session, for crypto-verification magic

## 🧑‍💻 by e280
reward us with github stars  
build with us at https://e280.org/ if you're good at dev  

