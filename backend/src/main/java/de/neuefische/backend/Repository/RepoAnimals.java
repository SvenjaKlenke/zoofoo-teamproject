package de.neuefische.backend.Repository;
import de.neuefische.backend.Model.Animals;
import lombok.Data;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data


public class RepoAnimals {
/*    Animals animals1 = new Animals("1", "Elephant", "fruit", 10, "Monday", 3, "open", "Amelie", "");
    Animals animals2 = new Animals("2", "Giraffe", "fruit", 9, "Wednesday", 4, "open", "Svenja", "");
    Animals animals3 = new Animals("3", "Bear", "fish", 10, "Friday", 1, "open", "Richard", "");
    Animals animals4 = new Animals("4", "Monkey", "fruit", 5, "Thursday", 23, "open", "Kristina", "");*/

    private final Map<String, Animals> allAnimalsMap = new HashMap<>( /*Map.of(
            "1", animals1,
            "2", animals2,
            "3", animals3,
            "4", animals4
    )*/);



    public List<Animals> getAllAnimals() {
        return new ArrayList<>(allAnimalsMap.values());
    }
}
