package dev.engelhard.animereviewapi.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.engelhard.animereviewapi.models.Review;

public interface ReviewRepository extends JpaRepository<Review, UUID>{
    
}
