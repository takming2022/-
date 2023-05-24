pragma solidity ^0.8.12;

contract bet_various_v2 {
    enum State {
        Started,
        Locked
    }
    State public state = State.Started;

    struct Ld_room {
        address Ld_wallet_address;
        string Ld_phone;
        string Room_type;
        string Room_address;
        string introduce;
        string Room_name;
        string[] equiment;
        string Room_id;
        string[] Room_image;
        string money;
    }
    struct User {
        address User_wellet_address;
        string Gmail;
        string User_nickname;
    }
    struct Comment {
        int256 Comment_no;
        string Room_id;
        string Comment;
        address User_wellet_address;
    }
    struct Order {
        string order_uiud;
        string Room_uuid;
        address User_wallet_address;
        string money;
        string room_name;
        string Room_address;
        address Ld_wallet_address;
        uint256 timestamp;
        uint256 timestampend;
    }
    struct landlord {
        address Ld_wallet_address;
        string[] uiud;
    }
    struct orderlord {
        address User_wallet_address;
        string[] order_uiud;
    }
    struct orderlordlink {
        string Room_uuid;
        uint256[] timestamp;
        uint256[] timestampend;
    }
    struct evaluate {
        address[] User_wallet_address;
        string[] theComment;
    }
    struct test {
        string[][] aarr;
    }

    test[] tests;
    //
    mapping(uint256 => Ld_room) rooms; //struct => ld_room  mapping => rooms 房間資訊
    mapping(uint256 => Order) orders; //struct => Order  mapping => orders 訂單資訊
    mapping(address => landlord) ldlord; //struct => landlord  mapping => ldlord 找房東房間
    mapping(address => orderlord) orrlord; //struct => orderlord  mapping => orrlord 找使用者房間ID
    mapping(string => orderlordlink) orrlink; //找某個房間的開始結束時間
    mapping(string => evaluate) evaluate_maped; //某個房間被那些使用者留了什麼言
    mapping(address => bool) authorizedAddresses;
    //
    uint256[] public Order_arr;
    uint256[] public Ld_rooms;

    uint256[] public ldlords;
    address public deployer;
    address[] public addedAddresses;
    uint256 num_Ld_romm = 0;
    uint256 arraysize = 0;
    uint256 bettingprice = 0.01 ether;
    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    function getdeployer() public view returns (address) {
        return deployer;
    }

    function addAuthorizedAddress(address _address)
        public
        payable
        onlyDeployer
    {
        authorizedAddresses[_address] = true;
        addedAddresses.push(_address);
    }

    function getAllAuthorizedAddresses() public view returns (string memory) {
        string memory addresses;
        for (uint256 i = 0; i < addedAddresses.length; i++) {
            addresses = string(
                abi.encodePacked(addresses, toString(addedAddresses[i]), "<br>")
            );
        }
        return addresses;
    }

    function toString(address _address) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_address)));
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(42);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }

    constructor() {
        deployer = msg.sender;
    }

    modifier onlyDeployerOrAuthorized() {
        require(
            msg.sender == deployer || authorizedAddresses[msg.sender],
            "Only deployer or authorized addresses can call this function."
        );
        _;
    }
    modifier onlyAuthorized() {
        require(
            authorizedAddresses[msg.sender],
            "Only authorized addresses can call this function."
        );
        _;
    }
    modifier onlyDeployer() {
        require(
            msg.sender == deployer,
            "Only deployer can call this function."
        );
        _;
    }

    function doComment(string memory Room_Comment, string memory Room_uuid)
        public
        payable
    {
        require(msg.value == bettingprice);
        evaluate storage newEvaluate = evaluate_maped[Room_uuid];
        newEvaluate.User_wallet_address.push(msg.sender);
        newEvaluate.theComment.push(Room_Comment);
    }

    function getComment(string memory Room_uuid)
        public
        view
        returns (address[] memory, string[] memory)
    {
        evaluate storage theC = evaluate_maped[Room_uuid];
        return (theC.User_wallet_address, theC.theComment);
    }

    function op_clear_order(string memory order_id)
        public
        payable
        onlyDeployerOrAuthorized
    {
        uint256 i;
        for (i = 0; i < Order_arr.length; i++) {
            Order storage s1 = orders[i];
            if (
                keccak256(abi.encodePacked(s1.order_uiud)) ==
                keccak256(abi.encodePacked(order_id))
            ) {
                delete orders[i];
                Order storage s = orders[Order_arr.length - 1];
                s1.order_uiud = s.order_uiud;
                s1.Room_uuid = s.Room_uuid;
                s1.User_wallet_address = msg.sender;
                s1.money = s.money;
                s1.room_name = s.room_name;
                s1.Room_address = s.Room_address;
                s1.Ld_wallet_address = s.Ld_wallet_address;
                s1.timestamp = s.timestamp;
                s1.timestampend = s.timestampend;
                delete orders[Order_arr.length - 1];
                Order_arr.pop();
                break;
            }
        }
    }

    function add_order(
        string memory order_uiud,
        string memory Room_uuid,
        string memory money,
        string memory room_name,
        string memory Room_address,
        address Ld_wallet_address,
        uint256 timestamp,
        uint256 timestampend
    ) public payable {
        require(msg.value == bettingprice);
        Order storage newOrder = orders[Order_arr.length];
        newOrder.order_uiud = order_uiud;
        newOrder.Room_uuid = Room_uuid;
        newOrder.User_wallet_address = msg.sender;
        newOrder.money = money;
        newOrder.room_name = room_name;
        newOrder.Room_address = Room_address;
        newOrder.Ld_wallet_address = Ld_wallet_address;
        newOrder.timestamp = timestamp;
        newOrder.timestampend = timestampend;
        Order_arr.push(Order_arr.length);

        orderlord storage newOrderlord = orrlord[msg.sender];
        newOrderlord.User_wallet_address = msg.sender;
        newOrderlord.order_uiud.push(order_uiud);

        orderlordlink storage newOrderlordlink = orrlink[Room_uuid];
        newOrderlordlink.Room_uuid = Room_uuid;
        newOrderlordlink.timestamp.push(timestamp);
        newOrderlordlink.timestampend.push(timestampend);
    }

    function get_order_length() public view returns (uint256) {
        return (Order_arr.length);
    }

    function getorderscard(uint256 id)
        public
        view
        returns (
            string memory,
            string memory,
            address,
            string memory,
            string memory,
            string memory,
            address,
            uint256,
            uint256
        )
    {
        Order storage s = orders[id];

        return (
            s.order_uiud,
            s.Room_uuid,
            s.User_wallet_address,
            s.money,
            s.room_name,
            s.Room_address,
            s.Ld_wallet_address,
            s.timestamp,
            s.timestampend
        );
    }

    function getordersInfo(string memory order_id)
        public
        view
        returns (
            string memory,
            string memory,
            address,
            string memory,
            string memory,
            string memory,
            address,
            uint256,
            uint256
        )
    {
        uint256 i;
        for (i = 0; i < Order_arr.length; i++) {
            Order memory s1 = orders[i];
            if (
                keccak256(abi.encodePacked(s1.order_uiud)) ==
                keccak256(abi.encodePacked(order_id))
            ) {
                break;
            }
        }
        Order storage s = orders[i];

        return (
            s.order_uiud,
            s.Room_uuid,
            s.User_wallet_address,
            s.money,
            s.room_name,
            s.Room_address,
            s.Ld_wallet_address,
            s.timestamp,
            s.timestampend
        );
    }

    function getorder_id() public view returns (string[] memory) {
        orderlord storage s = orrlord[msg.sender];
        return (s.order_uiud);
    }

    function add_Ld_room(
        string memory Ld_phone,
        string memory Room_type,
        string memory Room_address,
        string memory introduce,
        string memory Room_name,
        string[] memory equiment,
        string memory Room_id,
        string[] memory Room_image,
        string memory money
    ) public payable inState(State.Started) {
        require(msg.value == bettingprice);
        require(Room_image.length > 0);
        landlord storage newldlords = ldlord[msg.sender];
        newldlords.Ld_wallet_address = msg.sender;
        newldlords.uiud.push(Room_id);
        Ld_room storage newRooms = rooms[Ld_rooms.length];
        newRooms.Ld_wallet_address = msg.sender;
        newRooms.Ld_phone = Ld_phone;
        newRooms.Room_type = Room_type;
        newRooms.Room_address = Room_address;
        newRooms.introduce = introduce;
        newRooms.Room_name = Room_name;
        newRooms.equiment = equiment;
        newRooms.Room_id = Room_id;
        newRooms.Room_image = Room_image;
        newRooms.money = money;
        ldlords.push(Ld_rooms.length);
        Ld_rooms.push(Ld_rooms.length);
        arraysize++;
    }

    function getrooms(string memory id)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string[] memory,
            string memory,
            string[] memory,
            string memory
        )
    {
        uint256 i;
        for (i = 0; i < Ld_rooms.length; i++) {
            Ld_room memory s1 = rooms[i];
            if (
                keccak256(abi.encodePacked(s1.Room_id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                break;
            }
        }
        Ld_room storage s = rooms[i];

        return (
            s.Ld_wallet_address,
            s.Ld_phone,
            s.Room_type,
            s.Room_address,
            s.introduce,
            s.Room_name,
            s.equiment,
            s.Room_id,
            s.Room_image,
            s.money
        );
    }

    function getroomscard(uint256 id)
        public
        view
        returns (
            address,
            string memory,
            string[] memory,
            string memory,
            string memory
        )
    {
        Ld_room storage s = rooms[id];
        return (
            s.Ld_wallet_address,
            s.Room_name,
            s.Room_image,
            s.money,
            s.Room_id
        );
    }

    function clearroom(string memory id) public payable {
        require(msg.value == bettingprice);

        landlord storage newldlords = ldlord[msg.sender];

        for (uint256 i = 0; i < Ld_rooms.length; i++) {
            Ld_room storage newRooms = rooms[i];
            if (
                keccak256(abi.encodePacked(newRooms.Room_id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                for (uint256 j = 0; j < newldlords.uiud.length; j++) {
                    if (
                        keccak256(abi.encodePacked(newRooms.Room_id)) ==
                        keccak256(abi.encodePacked(newldlords.uiud[j]))
                    ) {
                        if (i == newldlords.uiud.length - 1) {
                            newldlords.uiud.pop();
                        } else {
                            newldlords.uiud[j] = newldlords.uiud[
                                newldlords.uiud.length - 1
                            ];
                            newldlords.uiud.pop();
                        }
                    }
                }
                delete rooms[i];
                Ld_room storage s = rooms[Ld_rooms.length - 1];
                newRooms.Ld_wallet_address = s.Ld_wallet_address;
                newRooms.Ld_phone = s.Ld_phone;
                newRooms.Room_type = s.Room_type;
                newRooms.Room_address = s.Room_address;
                newRooms.introduce = s.introduce;
                newRooms.Room_name = s.Room_name;
                newRooms.equiment = s.equiment;
                newRooms.Room_id = s.Room_id;
                newRooms.Room_image = s.Room_image;
                newRooms.money = s.money;
                delete rooms[Ld_rooms.length - 1];
                Ld_rooms.pop();
                break;
            }
        }
    }

    function op_update_Ld_room(
        string memory id,
        string memory Ld_phone,
        string memory Room_type,
        string memory Room_address,
        string memory introduce,
        string memory Room_name,
        string[] memory equiment,
        string memory Room_id,
        string[] memory Room_image,
        string memory money,
        address Ld_wallet_address
    ) public payable inState(State.Started) onlyDeployerOrAuthorized {
        require(msg.value == bettingprice);
        for (uint256 i = 0; i < Ld_rooms.length; i++) {
            Ld_room storage newRooms = rooms[i];
            if (
                keccak256(abi.encodePacked(newRooms.Room_id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                newRooms.Ld_wallet_address = Ld_wallet_address;
                newRooms.Ld_phone = Ld_phone;
                newRooms.Room_type = Room_type;
                newRooms.Room_address = Room_address;
                newRooms.introduce = introduce;
                newRooms.Room_name = Room_name;
                newRooms.equiment = equiment;
                newRooms.Room_id = Room_id;
                newRooms.Room_image = Room_image;
                newRooms.money = money;
                break;
            }
        }
    }

    function op_clearroom(string memory id)
        public
        payable
        onlyDeployerOrAuthorized
    {
        require(msg.value == bettingprice);
        for (uint256 i = 0; i < Ld_rooms.length; i++) {
            Ld_room storage newRooms = rooms[i];
            if (
                keccak256(abi.encodePacked(newRooms.Room_id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                delete rooms[i];
                Ld_room storage s = rooms[Ld_rooms.length - 1];
                newRooms.Ld_wallet_address = s.Ld_wallet_address;
                newRooms.Ld_phone = s.Ld_phone;
                newRooms.Room_type = s.Room_type;
                newRooms.Room_address = s.Room_address;
                newRooms.introduce = s.introduce;
                newRooms.Room_name = s.Room_name;
                newRooms.equiment = s.equiment;
                newRooms.Room_id = s.Room_id;
                newRooms.Room_image = s.Room_image;
                newRooms.money = s.money;
                delete rooms[Ld_rooms.length - 1];
                Ld_rooms.pop();
                break;
            }
        }
    }

    function romms_length() public view returns (uint256) {
        return (Ld_rooms.length);
    }

    function getuser_room() public view returns (string[] memory) {
        landlord storage s = ldlord[msg.sender];
        return (s.uiud);
    }

}
