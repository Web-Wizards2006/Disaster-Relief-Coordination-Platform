@RestController
@RequestMapping("/api/donations")
public class DonationController {
    private double totalDonations = 0;

    @PostMapping
    public ResponseEntity<?> donate() {
        totalDonations += 10;
        return ResponseEntity.ok(Map.of("totalDonations", totalDonations));
    }
}
