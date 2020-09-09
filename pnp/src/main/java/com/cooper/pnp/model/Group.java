package com.cooper.pnp.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "sharer")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="sharer_id")
    private Long id;
    
    @NonNull
    private String name;
    
    @ManyToOne(cascade=CascadeType.PERSIST)
    private User user;

    /* 
    Do not touch unless you know what you are doing
    
    */
    @OneToMany(mappedBy="sharer", fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Set<Event> events;
}