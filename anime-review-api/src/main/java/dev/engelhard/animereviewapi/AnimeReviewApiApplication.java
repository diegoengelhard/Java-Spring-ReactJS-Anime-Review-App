package dev.engelhard.animereviewapi;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import javax.sql.DataSource;

@SpringBootApplication
public class AnimeReviewApiApplication {

    private static final Logger log = LoggerFactory.getLogger(AnimeReviewApiApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(AnimeReviewApiApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(DataSource dataSource) {
        return args -> {
            try {
                dataSource.getConnection();
                log.info("Database connection successful");
            } catch (Exception e) {
                log.error("Database connection failed", e);
            }
        };
    }
}
