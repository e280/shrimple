
## shrimple cloud hosting

1. create a debian/ubuntu box in the cloud
1. ssh in as root
1. install stuff
    - latest lts node
    - caddy
    - `npm i -g npm@latest pm2`
1. setup Caddyfile
    ```Caddyfile
    shrimple.io {
      reverse_proxy localhost:8080
    }
    ```
    and reload caddy
    ```bash
    systemctl reload caddy
    ```
1. make deployer user, with a dedicated ssh keypair for it
1. setup github deploy workflow

