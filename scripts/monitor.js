const os = require('os');

function logStatus() {
  const status = {
    uptime: os.uptime(),
    load: os.loadavg(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('Development Mode Status:', status);
  } else {
    console.log(JSON.stringify(status));
  }
}

setInterval(logStatus, 5000);