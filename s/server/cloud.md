
## shrimple cloud hosting

1. create a debian/ubuntu box in the cloud
1. ssh into it as root
1. install stuff
    ```bash
    # node
    curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash - 
    sudo apt-get install -y nodejs
    ```
    ```bash
    sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
    chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg
    chmod o+r /etc/apt/sources.list.d/caddy-stable.list
    sudo apt update
    sudo apt install caddy
    ```
    ```bash
    npm i -g npm@latest pm2
    ```
1. make deployer user, with a dedicated ssh keypair for it

