    // menu déroulant

    document.getElementById("btn").onclick = function(){myFunction()};

    function myFunction(){
        document.getElementById("menu").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.menubtn')) {
      
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }