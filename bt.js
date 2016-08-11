

function Node(data){
this.data=data;
this.left=null;
this.right=null;
};
var btree=function(){
this.root = null;
};
		btree.prototype.add=function(data){
          

		var node=new Node(data);
        	if(this.root===null){
          	 this.root=node;
               document.write(this.root.data);
          	}
           else{
        	var currentNode=this.root;
        	var parentNode=null;
         	while(currentNode){
                  if(data< currentNode.data){
            	             if(currentNode.left===null){
               	             currentNode.left=node;
                 document.write(currentNode.left.data);
                             break;
             	}
         	else{
              currentNode=currentNode.left;
          }
                  }
            else{
              if(data>currentNode.data){
                
                  if(currentNode.right===null){
                        currentNode.right=node;
                       document.write(currentNode.right.data);
                        break;
                  }
                else{
                      currentNode=currentNode.right;
                }
                  }
              }
            }
           }  	
    };
     var temp=new btree();
         temp.add(5);
         temp.add(10);
         temp.add(49);
          temp.add(20);    

