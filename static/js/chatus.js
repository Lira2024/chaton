const $chatMessages = document.querySelector('.messages')

const getMessages = assync (room_id) =>{
    const response = await fetch(`/${room_id}`);
    const html = await response.text();
    $chatMessages.innerHTML = html
};

getMessages();