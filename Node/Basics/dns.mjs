import dns from "dns"

dns.lookup("google.com", (err, address, family) => {
    console.log(address);  
})
// dns.resolve("google.com", "A",(err, address)=>{
//     console.log(JSON.stringify(address));
// })

// rrtype 
// 'A' (Address Record): Maps a hostname to IPv4 address.
// 'AAAA' (IPv6 Address Record): Maps a hostname to IPv6 address.
// 'CNAME' (Canonical Name Record): Maps an alias hostname to the canonical (true) hostname.
// 'MX' (Mail Exchange Record): Specifies the mail server responsible for accepting email messages for a domain.
// 'TXT' (Text Record): Stores human-readable text associated with a domain, commonly used for SPF (Sender Policy Framework) records and other purposes.
// 'NS' (Name Server Record): Specifies the authoritative DNS servers for a domain.
// 'PTR' (Pointer Record): Maps an IP address to a hostname, used in reverse DNS lookups.
// 'SRV' (Service Record): Defines the location of services available in a network, typically used for specifying the location of servers for specific services like SIP, XMPP, and others.
// 'SOA' (Start of Authority Record): Contains administrative information about the zone, including the primary authoritative DNS server, contact email, serial number, and other details.

dns.reverse("2404:6800:4009:828::200e", (err, address) => {
    console.log(address);
})

// dns.resolve("142.250.183.110", "PTR", (err, address) => {
//     console.log(JSON.stringify(address));
// })
// console.log(dns.getServers())