@RestController
@RequestMapping("/api/sos")
public class SOSController {
    @Autowired
    private SOSRepository sosRepository;

    @PostMapping
    public ResponseEntity<?> sendSOS(@RequestBody SOSAlert alert) {
        sosRepository.save(alert);
        return ResponseEntity.ok("SOS Alert Sent!");
    }
}
