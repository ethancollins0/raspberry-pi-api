# Water.pi
*A Web App to Automate Monitoring and Watering of Plants!*

![intro](https://github.com/ethancollins0/capstone-backend/blob/master/GitFiles/Home.png)

Water.pi is a web app I made in 3 weeks at Flatiron School. The app allows a user to signup and login, 
and securely keeps the user logged in using JWT. The user can go to their home page, and see a list of all of their pi's,
and easily navigate to a page to add more pi's to their collection. The home page allows the user to see whether their 
pi's are online, and see whether the plant needs to be watered. Finally, it lets the user know if the plant is being 
watered by the pi using WebSockets.

##### [Backend](https://github.com/ethancollins0/capstone-backend)
- Node.js
- Express
- Socket.io
- PostgreSQL
 
##### [Frontend](https://github.com/ethancollins0/capstone-frontend)
- Vue.js
- Vuex
- Vue-router
- Vue-socket.io

##### [Raspberry Pi](https://github.com/ethancollins0/raspberry-pi-api)
- Python
- Node.js
- Socket.io

## Features
Uses Socket.io to create a connection with the Node.js backend, and sends data based on soil moisture. User can easily add a pi
to their account by copying a token from the frontend and putting it into the index.js file.

Detects soil moisture using an analog soil moisture sensor, and automatically pumps water using a peristaltic pump.

Uses a 4 channel relay, so more pumps could be added to care for a larger number of plants, all controlled from the same Raspberry pi.

## Hardware Used
- [Raspberry Pi 3 A+](https://www.raspberrypi.org/products/raspberry-pi-3-model-a-plus/)
- [5V Relay](https://www.amazon.com/gp/product/B0057OC5O8/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- [12V Power Adapter](https://www.amazon.com/gp/product/B019Q3U72M/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- [12V DC Peristaltic Pump](https://www.amazon.com/gp/product/B075VN1QZM/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1)
- [Moisture Sensor with AD Converter and Jumper Wires](https://www.amazon.com/gp/product/B071F4RDHY/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
- [SD Card](https://www.amazon.com/gp/product/B073K14CVB/ref=ppx_yo_dt_b_asin_title_o03_s01?ie=UTF8&psc=1)




## Contributing
Please feel free to open a pull request or report any bugs, thanks!
