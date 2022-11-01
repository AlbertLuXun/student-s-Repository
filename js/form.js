function checkBox(name){
				var j=0;
				var checkbox=document.getElementsByName(name);
				for(var i=0; i<checkbox.length;i++){
					if(checkbox[i].checked){
						j++;
						break;
					}
				}
				if(j==0)return false;
				return true;
			}	
function check(){
				var q3=checkBox("q3");
				if(q3==false){
					alert("第4题起码要选择一个选项");
					return false;
				}	
				var q4=checkBox("q4");
				if(q4==false){
					alert("第5题起码要选择一个选项");
					return false;
				}	
			}