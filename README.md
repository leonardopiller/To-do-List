# To-do-List
A To-Do list that can be displayed in Dark Mode or Light Mode, as selected by the user. Users can add their own tasks, delete them, or mark them as done. If you need a hobby, you can find random suggestions and add them to the list.

First of all, 'X' is inserted as a Text Node:

![image](https://github.com/leonardopiller/To-do-List/assets/121625024/32e07f6b-58c2-439f-94f0-ba004b7b4d01)


Then, this function will delete element if ' X ' is clicked. 
addCloseEventListener is called in case of those LI itens that aren't Node Elements (tasks that already come in my HTML code). 

![image](https://github.com/leonardopiller/To-do-List/assets/121625024/3c0b7e43-8da3-4ccd-b41a-79b7154a1c9c)




So, the user can type his own tasks and it will appear on the To-Do list using newItem(). This function will prevent empty values to been add as a task. If value is true, it will be append to task list and clean input. addCloseEventListener is applied for those elements, so they can be closed. 

![image](https://github.com/leonardopiller/To-do-List/assets/121625024/b14b23a6-a4c2-478f-a65c-1c492b04823c)


If a task is clicked, it will toggle the class 'checked', which combined with CSS, provides a marked style. 

![image](https://github.com/leonardopiller/To-do-List/assets/121625024/cf06be26-8495-45c4-97b3-096d0e0c9114)



At the bottom of the page, Hobbies can be randomily displayed form "hobbies.json" file, like a task suggestion. 

![image](https://github.com/leonardopiller/To-do-List/assets/121625024/eb8988dd-356d-4306-b7ae-2ab7823d5868)




As a functionality, the suggested hobby can be added to the task list using the process mentioned above.

  ![image](https://github.com/leonardopiller/To-do-List/assets/121625024/9601451c-ceaf-4334-a081-ccda3bb97d14)


Finally, it toggle class "dark", so it generates a dark and light effect by hiding the opposite.

![image](https://github.com/leonardopiller/To-do-List/assets/121625024/5a2de0c6-f029-4936-9856-ef571480cc4a)




SCREENSHOTS


Light mode screenshot:

![ToDo-light](https://github.com/leonardopiller/To-do-List/assets/121625024/bd16842b-673c-4a9c-9351-8ce2e41a4add)


Dark mode screenshot:

![ToDo-dark responsive](https://github.com/leonardopiller/To-do-List/assets/121625024/6fd9c7c1-e588-419e-9c9b-bdbf599531e2)


Note that the project is responsive.
