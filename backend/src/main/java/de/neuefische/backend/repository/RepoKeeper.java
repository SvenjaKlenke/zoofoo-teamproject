package de.neuefische.backend.repository;

import de.neuefische.backend.model.Keeper;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RepoKeeper extends MongoRepository<Keeper, String> {
    Optional<Keeper> findKeeperByUsername(String username);
}
