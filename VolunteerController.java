@RestController
@RequestMapping("/api/volunteers")
public class VolunteerController {
    @Autowired
    private VolunteerRepository volunteerRepository;

    @PostMapping
    public ResponseEntity<?> registerVolunteer(@RequestBody Volunteer volunteer) {
        volunteerRepository.save(volunteer);
        return ResponseEntity.ok("Volunteer Registered!");
    }
}
