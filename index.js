if(localStorage.getItem('text')){
    var arr=JSON.parse(localStorage.getItem('text'))
    for(let i=0;i<arr.length;i++){
        var div=$("<div>").attr('class','newDiv')
        div.css({
            display:'flex',
            gap:'10px',
            margin:'10px 0',
            alignItems:'center',
            
        })
        var p=$('<p>').text(arr[i])
        var btnDel=$('<button class="btnDel">').text("X")
        div.append(btnDel,p)
        $('.lists').append(div)
    }
}
else{
    var arr=[]
}
$('.send').click(function(e){
    var inp=$('input')
    var inpVal=inp.val()
    e.preventDefault()

    if ( inpVal === '') {
        alert(' Write something !');

    }
    else{

        arr.push(inpVal)

        localStorage.setItem('text',JSON.stringify(arr))
        var div=$("<div>")
        div.css({
            display:'flex',
            alignItems:'center',
            gap:'10px',
            margin:'10px 0'
            
        })
        var p=$("<p>").text(inpVal)
        var btnDel=$('<button class="btnDel">').text("X")
        div.append(btnDel,p)
        $('.lists').append(div)
        inp.val('')


    }


    
   

})
$(document).on('click','.btnDel',function(){
    this.parentElement.style.display='none'
    for(let i=0;i<arr.length;i++){
        if(this.parentElement.children[1].textContent==arr[i]){
            arr.splice(i,1)
            localStorage.setItem('text',JSON.stringify(arr)) 

        }
    }
    
    
})