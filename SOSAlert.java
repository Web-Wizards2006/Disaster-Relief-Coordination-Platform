@Entity
public class SOSAlert {
    @Id @GeneratedValue
    private Long id;
    private double latitude;
    private double longitude;
}
