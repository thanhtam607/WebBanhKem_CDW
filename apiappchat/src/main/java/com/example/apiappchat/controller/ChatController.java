package com.example.apiappchat.controller;

import com.example.apiappchat.model.Message;
import com.example.apiappchat.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private MessageService messageService;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receivePublicMessage(@Payload Message message){
        // Lưu tin nhắn vào cơ sở dữ liệu
        messageService.saveMessage(message);
        return message;
    }

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message){
        // Lưu tin nhắn vào cơ sở dữ liệu
        messageService.saveMessage(message);
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private", message);
        return message;
    }
    @GetMapping("/message")
    @ResponseBody
    public List<Message> getMessagesByUsername(@RequestParam("email") String email) {
        // Call service to fetch messages
        List<Message> messages = messageService.getMessagesForUser(email);
        return messages;
    }
    @GetMapping("/users")
    public ResponseEntity<List<String>> getAllUsersExceptPeaceBakery() {
        List<String> users = messageService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
