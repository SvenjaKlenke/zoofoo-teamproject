package de.neuefische.backend.service;

import de.neuefische.backend.model.Keeper;
import de.neuefische.backend.repository.RepoKeeper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceKeeper implements UserDetailsService {

    private final RepoKeeper repoKeeper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Keeper keeper = repoKeeper.findKeeperByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found"));
        return new User(keeper.getUsername(), keeper.getPassword(), List.of());
    }
}

   