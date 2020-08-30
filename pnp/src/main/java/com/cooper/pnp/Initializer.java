package com.cooper.pnp.model;

import com.cooper.pnp.model.Event;
import com.cooper.pnp.model.Group;
import com.cooper.pnp.model.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Dawson Junior 3rd", "Fall guy", "Jamison Kellyson",
                "Peter Parka").forEach(name ->
                repository.save(new Group(name))
        );

        Group djug = repository.findByName("Dawson Junior 3rd");
        Event e = Event.builder().title("www.pornhub.com")
                .description("Reactive with Spring Boot + React")
                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
                .build();
        djug.setEvents(Collections.singleton(e));
        repository.save(djug);

        repository.findAll().forEach(System.out::println);
    }
}