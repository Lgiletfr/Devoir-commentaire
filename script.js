document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const messageInput = document.getElementById('message');
  const commentList = document.getElementById('comment-list');
  const errorMessage = document.getElementById('error-message');

  commentForm.addEventListener('submit', function(event) {
      event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const message = messageInput.value.trim();

      if (firstName && lastName && message) {
          const newCommentElement = document.createElement('div');
          newCommentElement.classList.add('comment', 'flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200', 'py-10');
          newCommentElement.innerHTML = `
              <div class="flex-1">
                  <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                      <p>${message}</p>
                  </div>
              </div>
          `;

          commentList.appendChild(newCommentElement);

          firstNameInput.value = '';
          lastNameInput.value = '';
          messageInput.value = '';

          errorMessage.style.display = 'none';
      } else {
          errorMessage.style.display = 'block';
      }
  });
});

