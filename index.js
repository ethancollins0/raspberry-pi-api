const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMCwicGlfaWQiOjE1MywiaWF0IjoxNTcxOTM5NTA4LCJleHAiOjE1NzQ1MzE1MDh9.cOVpLv1IvPWibYv2poTnBcFAgDt9mSq6g0OI-KqyPtI'
const BASE_URL = 'https://capstone-node-backend.herokuapp.com'


const io = require('socket.io-client')
let socket = io(BASE_URL, {
                query: {
                    token
   		}
	     })
             
socket.on('water', data => {
    console.log(data.water)
    if (data.water == true){
	let spawn = require('child_process').spawn;
	let process = spawn('python', ['./pump.py'])
    }
    
})

socket.on('online', () => {
    console.log('online')
})

const gpio = require('rpi-gpio')

gpio.setup(11, gpio.DIR_IN, readInput)

function readInput(){
	gpio.read(11, (err, val) => {
	     if (err) throw err;
	     socket.emit('water_data', { water: val, token })
	})
	setTimeout(() => {
		readInput()
	}, 5000)
}



