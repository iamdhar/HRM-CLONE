function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if ( username == "user" && password == "123"){
        alert ("Logged-in successfully");
        window.location = "logged-in.html"; // Redirecting to other page.
        return false;
        }
        else{
            alert("failed")
        }
}


//editable table code functrion

var table = document.getElementsByClassName('content-table');
    var cells = document.getElementsByTagName('td')

    for (var i = 0; i < cells.length; i++){
      cells[i].onclick = function(){
          if(this.hasAttribute('data-clicked')){
            return;
          }  
          this.setAttribute('data-clicked', 'yes');
          this.setAttribute('data-text', this.innerHTML);     

          var input = document.createElement('input');
          input.setAttribute('type', 'text');
          input.value = this.innerHTML;
          input.style.width = this.offsetWidth - (this.clientLeft * 2) + "px";
          input.style.height = this.offsetHeight - (this.clientTop * 2) + "px";
          input.style.border = "0px";
          input.style.fontFamily = "inherit";
          input.style.fontSize = "inherit";
          input.style.textAlign = "inherit";
          input.style.backgroundColor = "LightGoldenRodYellow";
          
          input.onBlur = function(){
            var td = input.parentElement;
            var orig_text = input.parentElement.getAttribute('data-text');
            var current_text = this.value;
            if (orig_text != current_text){
                //there are changes in the cell
                //save new data
                td.removeAttribute('data-clicked');
                td.removeAttribute('data-text');
                td.innerHTML = current_text; 
                td.style.cssText = 'padding: 5px';

            }

          }
          this.innerHTML = '';
          this.style.cssText = 'padding: 0px 0px';
          this.append(input);
          this.firstElementChild.select()
      }
    }