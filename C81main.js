canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
colour="red"

ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=2
ctx.arc(300,200,40,0,2*Math.PI)
ctx.stroke()


ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=2
ctx.arc(400,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=2
ctx.arc(250,240,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=2
ctx.arc(350,240,40,0,2*Math.PI)
ctx.stroke()







