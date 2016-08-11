/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function Node(data){
this.data=data;
this.left=null;
this.right=null;
};
function btree(){
this.root = null;
};
		btree.prototype = {
         add : function(data){
                var node=new Node(data);
        	        if(this.root===null){
          	       this.root=node;
                   document.write("root "+this.root.data+" node"+"<br>");
                	}
                    else{
        	             var currentNode=this.root;
        	             var parentNode=null;
         	             while(currentNode){
                             if(data< currentNode.data){
            	               if(currentNode.left===null){
               	             currentNode.left=node;
                             document.write("left "+currentNode.left.data+" node"+"<br>");
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
                         document.write("right"+currentNode.right.data+" node"+"<br>");
                        break;
                       }
                else{
                      currentNode=currentNode.right;
                    }
                  }
              }
            }
           }  	
    },
       
           		    inorderTraversal : function(){
                  function inorder(node){
	                        if (node) {
                         
                     inorder(node.left);
                          document.write(node.data+"<br>");
                      inorder(node.right);
                          }
               } 
                      inorder(this.root);
              },
                    preorderTraversal : function(){
                    function preorder(node){
                          if(node){
                       document.write(node.data+"<br>");
                            preorder(node.left);
                            preorder(node.right);
                        
                     }
                   }
                      preorder(this.root);
                 },
                      postorderTraversal : function(node){
                             if(node){
                               this.postorderTraversal(node.left);
                               this.postorderTraversal(node.right);
                               document.write(node.data+"<br>");
                             }                        
                      },
      
                      searchValueTree : function(node,value){
                              
                                 if(node === null){
                                   
                                   return null;
                                 }
                                      else if(node.data === value){
                                    
                                 document.write("value is found "+node.data+"<br>");
                                 }
                                    else if(value < node.data){
                                     this.searchValueTree(node.left,value);
                                  }
                                       else if(value > node.data){
                                        this.searchValueTree(node.right,value);
                                      }
                                 },
                      
                              minValuetree : function(node){
                                          
                                          
                                      while(currentNode.left != null){
                                        currentNode = currentNode.left;
                                      }
                                    document.write(currentNode);
     
                                     }
                      }; 
        

    

   
                
     var temp=new btree();
          document.write("..............................."+"<br>");
          document.write("BinaryTree:"+"<br>");
          document.write("<br>");
            temp.add(5);
            temp.add(10);
            temp.add(49);
            temp.add(20);
            temp.add(2);
            temp.add(3);
            temp.add(1);
                        document.write("..............................."+"<br>");
                        document.write("InorderTravels"+"<br>");
                        temp.inorderTraversal();
                        document.write("PreorderTravels"+"<br>");
                        temp.preorderTraversal();
                        document.write("PostorderTraversal"+"<br>");
                        temp.postorderTraversal(temp.root);

                        temp.searchValueTree(temp.root,10);
                          
                         temp.minValuetree(temp.root);

