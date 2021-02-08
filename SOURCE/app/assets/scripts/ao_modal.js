
function trowModal(data) {
    // create a new div element
    var newModal = document.createElement("div");
    newModal.classList.add('ao_modal');
    // and give it some content
    var newModalTitle = document.createElement("h2");
    var newModalTitleText = document.createTextNode(data.title);
    newModalTitle.appendChild(newModalTitleText);
    // and give it some content
    var newModalText = document.createElement("p");
    var newModalTextText = document.createTextNode(data.text);
    newModalTitle.appendChild(newModalTitleText);
    // and give it some content
    var newModalButton = document.createElement("button");
    var newModalButtonText = document.createTextNode(data.confirmButtonText);
    newModalButton.appendChild(newModalButtonText);

    // add the text node to the newly created div
    newModal.appendChild(newModalTitle);
    newModal.appendChild(newModalTitle);
    newModal.appendChild(newModalButton);

    document.body.appendChild(newModal);
}


//TEST MODAL 

var testModal = {
    title: 'Error [alpha_version]!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
    cancelButtonText: 'Nope',
    showCancelButton: true,
    showCloseButton: true
}

trowModal(testModal);