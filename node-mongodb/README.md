# vagrant-nodejs-mongo

This Vagrant machine contains:
* Ubuntu 16.04
* Node.js
* MongoDB

## How to use

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](https://www.vagrantup.com/downloads.html)

2. Clone this repository

```
git clone https://github.com/chavo1/nodejs.git
cd nodejs
vagrant up
```

3. Run `vagrant up` in the folder that holds this repository

4. Wait for the virtual machine to download and start

5. Log in to the machine running `vagrant ssh`

To run the sample, do the following while logged into the virtual machine:
* `cd /vagrant`
* `npm install`
* `nodejs server`

### Networking
If you go to your web browser and type `http://192.168..56.56:3000` you should see the sample page with a following content.
```
Hello Vagrant!

Connected to MongoDB
```