// window.onload = function() {
//     alert("This is just a demo design of GreenLead. A working prototype has been developed but NOT yet deployed. The data on the web design is not factual; it is provided solely for demonstration purposes!");
// };

function showTab(index) {
    var tabs = document.querySelectorAll('.menu .gradient-border');
    var tabContents = document.querySelectorAll('.nacc .tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    tabs[index].classList.add('active');
    tabContents[index].classList.add('active');
}