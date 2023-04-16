##

Quick MVP build for an project where a user can record Audio and then audiomate transcribes the audio to text using Whisper. The user can then edit the message using their voice

## stripe

### Start local webhook server

```bash
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

