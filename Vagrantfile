 Vagrant.configure("2") do |config|
      config.vm.box = "chavo1/xenial64base"
      config.vm.box_version = "0.0.1"
      config.vm.network "private_network", ip: "192.168.56.56"
      config.vm.provision "shell", inline: <<-SCRIPT
            apt-get update
            apt-get install -y vim wget unzip curl jq

            curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
            sudo apt-get install -y nodejs
            sudo apt-get install build-essential
        SCRIPT
  end
