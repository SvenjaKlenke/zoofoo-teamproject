package de.neuefische.backend.repository;

import de.neuefische.backend.model.Keeper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepoKeeper extends MongoRepository<Keeper, String> {
    Optional<Keeper> findKeeperByUsername(String username);
}
