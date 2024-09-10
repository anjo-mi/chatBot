// obtain input value, add it to chat list
const typingForm = document.querySelector('.typing-form')
const chatList = document.querySelector('.chat-list')


let userMessage = null

// create new message, return it
const createMessageElement = (content, className) =>{
    const sect = document.createElement('section')
    sect.classList.add('message', className)
    sect.innerHTML = content
    return sect
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector('.typing-input').value.trim()
    if (!userMessage) return

    const html = `<section class="message-content">
                <img src="images/user.jpg" alt="user logo" class="avatar">
                <p class="text"></p>
                </section>` 

    const outgoingMessageSect = createMessageElement(html, 'outgoing')
    outgoingMessageSect.querySelector('.text').innerText = userMessage
    chatList.appendChild(outgoingMessageSect)


    typingForm.querySelector('.typing-input').value = ''
}


// prevent default, handle outgoing messages
typingForm.addEventListener('submit', (ev) => {
    ev.preventDefault()

    handleOutgoingChat()
})