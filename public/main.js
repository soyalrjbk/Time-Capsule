var trash = document.getElementsByClassName("delete");
var saveBtn = document.getElementsByClassName("save");

//Delete
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.dataset.id
        fetch('capsules', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

//Edit
Array.from(saveBtn).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.dataset.id
        const message = this.parentNode.querySelector('.edit').value
        fetch('capsules', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id, message })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
