package com.example.apiappchat.service;

import com.example.apiappchat.model.Message;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void saveMessage(Message message) {
        entityManager.persist(message);
    }
    public List<Message> getMessagesForUser(String email) {
            String sql = "SELECT * FROM message " +
                    "WHERE (sender_name = :email AND receiver_name = 'Peace Bakery') OR " +
                    "(sender_name = 'Peace Bakery' AND receiver_name = :email)";
            return entityManager.createNativeQuery(sql, Message.class)
                    .setParameter("email", email)
                    .getResultList();
        }
    public List<String> getAllUsers() {
        String jpql = "SELECT DISTINCT CASE " +
                "WHEN m.senderName = 'Peace Bakery' THEN m.receiverName " +
                "WHEN m.receiverName = 'Peace Bakery' THEN m.senderName " +
                "END FROM Message m " +
                "WHERE m.senderName = 'Peace Bakery' OR m.receiverName = 'Peace Bakery'";
        return entityManager.createQuery(jpql, String.class)
                .getResultList();
    }
}

