package de.neuefische.backend.repository;

import de.neuefische.backend.model.Animals;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoAnimals extends MongoRepository<Animals, String> {

}
