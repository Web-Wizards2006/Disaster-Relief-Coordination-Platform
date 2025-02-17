@Entity
public class Volunteer {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String email;
}
