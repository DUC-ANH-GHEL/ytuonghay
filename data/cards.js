// Dữ liệu các lá bài
export const cards = [
    {
      id: 1,
      title: 'How to?',
      description: 'Cách, làm thế nào để làm một điều gì đó.',
      examples: [
        'Cách để xây dựng 01 trang web chuyên nghiệp từ đầu chỉ trong 30 phút.',
        'Cách để học một ngoại ngữ bất kì trong vòng 03 tháng.',
        'Làm thế nào để xây một kênh Tiktok đạt 100.000 người theo dõi.'
      ],
      note: 'Thu hút sự chú ý người xem ngay lập tức bằng câu hỏi và sự tò mò, cho người xem biết được giá trị sẽ nhận đuôc',
      img: 'https://cdn-icons-png.flaticon.com/512/1827/1827933.png',
      tags: ['howto', 'hướng dẫn', 'giá trị', 'giải pháp']
    },
    {
      id: '2',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
      title: 'Nhanh tay, kẻo hết',
      desc: 'Đưa ra một giới hạn về thời gian/số lượng/địa điểm.',
      examples: [
        'Giảm giá 50% duy nhất hôm nay.',
        '100 đơn hàng đầu tiên được giảm giá 50%.',
        '30 phút nữa sau khi mọi người đọc xong mình sẽ xóa nội dung bài viết này để tránh lan truyền.'
      ],
      note: 'Đánh mạnh vào cảm giác bị bỏ lỡ của người xem, khiến họ ngay lập tức xem kĩ nội dung.',
      tags: ['khẩn cấp', 'giới hạn', 'FOMO', 'gấp']
    },
    {
      id: '3',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
      title: 'Bạn biết chưa?',
      desc: 'Đặt câu hỏi trong đó có từ "bạn".',
      examples: [
        'Bạn có biết cách tán đổ một cô gái/chàng trai trong vòng 03 ngày làm quen không?',
        'Bạn có bao giờ tự hỏi, tại sao luôn có người thành công hơn rất nhiều người khác?',
        'Bạn có đang mắc những thói quen xấu của những người thất bại sau đây?'
      ],
      note: 'Tạo ra sự tò mò ở phần câu hỏi thứ vị, và đặt người xem vào bối cảnh bằng từ "bạn" để tạo ra sự thân thuộc đồng cảm.',
      tags: ['cá nhân hóa', 'tò mò', 'hỏi đáp', 'giao tiếp']
    },
    {
      id: '4',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828970.png',
      title: 'Trả lời bình luận tiêu cực',
      desc: 'Đề cập đến 01 câu hỏi hoặc 01 bình luận tiêu cực, sau đó khéo léo trả lời.',
      examples: [
        '"Hàng xấu thế, đừng mua phí tiền", ok đây là bình luận của bạn A, hôm nay mình sẽ trả lời.',
        '"Lừa đảo nhé đừng mua", hôm nay mình sẽ trả lời bình luận này.'
      ],
      note: 'Tạo sự đồng cảm, kết nối cho người xem, tạo độ tin cậy thực tế, tạo độ tự nhiên cho nội dung.',
      tags: ['phản hồi', 'tin cậy', 'bình luận', 'xử lý tình huống']
    },
    {
      id: '5',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828972.png',
      title: 'Thừa nhận và học từ sai lầm.',
      desc: 'Thừa nhận một nhược điểm của bản thân sau đó chia sẻ bài học.',
      examples: [
        'Đây là sai lầm nghiêm trọng đã suýt hủy hoại sự nghiệp của mình, bây giờ mình sẽ chia sẻ cho bạ và bài học từ nó.',
        'Mình là một kẻ thất bại trong tình cảm vì mắc những sai lầm sau.',
        'Đây là nhược điểm lớn nhất của chiếc điện thoại này mà bạn cần phải biết.'
      ],
      note: 'Tạo sự kết nối, đồng cảm và lấy niềm tin với người xem khi thừa nhận nhược điểm nào đó, vì không ai muốn nói về nhược điểm.',
      tags: ['thừa nhận', 'bài học', 'sai lầm', 'trưởng thành']
    },
    {
      id: '6',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      title: 'Câu chuyện thành công',
      desc: 'Chia sẻ các câu chuyện thành công của người khác, không phải bạn.',
      examples: [
        'Một vụ tại nạn ô tô đã cướp đi khả năng đi lại của anh A, nhưng không phải là khả năng thành công của anh ấy.',
        'Ước mơ của bà đã bị trì hoãn hàng chục năm nhưng cuối cùng ở tuổi 68, bà đã đạt được nó.',
        'Sau khi vượt qua cơn nghiện, B đã tìm ra con đường đúng để có thể dẫn đến thành công.'
      ],
      note: 'Những câu chuyện kể về 1 người vượt qua nghịch cảnh sẽ truyền cảm hứng và thu hút mọi người. Chú ý đến tính xác thực của các câu chuyện',
      tags: ['thành công', 'truyền cảm hứng', 'vượt khó', 'câu chuyện']
    },
    {
      id: '7',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135717.png',
      title: 'Sản phẩm thay đổi cuộc sống',
      desc: 'Đưa tên sản phẩm/dịch vụ vào câu mở đầu và nói về việc nó đã thay đổi cuộc sống của bạn/người khác',
      examples: [
        'Chiếc máy hút bụi với công nghệ hiện đại này đã thay đổi cuộc sống của chúng mình.',
        'Khóa học cấp tốc tiếng anh dành cho người lớn sẽ giúp bạn thành thạo tiếng Anh sau 03 tháng.',
        'Ghế massage thương hiệu A này sẽ giúp cơ thể bạn hết mệt mỏi sau một ngày làm việc..'
      ],
      note: 'Đơn giản trực quan, đề cập thẳng đến vấn đề và thông tin cho người xem.',
      tags: ['sản phẩm', 'trải nghiệm', 'thay đổi', 'review']
    },
    {
      id: '8',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135792.png',
      title: 'Tư duy khó sang dễ',
      desc: 'Xác thực sự hoài nghi/thờ ơ ban đầu của khán giả để xây dựng niềm tin, trước khi chuyển đổi tư duy của họ từ khó sang dễ.',
      examples: [
        'Tôi chưa bao giờ bận tâm đến thói quen buổi sáng... Cho đến khi thói quen đơn giản điên rồ này đã thay đổi mọi thứ.',
        'Đầu tư chứng khoán khiến tôi cảm thấy quá rủi ro... Nhưng ứng dụng đơn giản này đã giúp tôi bắt đầu một cách an toàn.'
      ],
      note: 'Hiểu rõ được khán giả bạn đang hướng tới, nắm được tư duy, niềm tin hạn chế đang tồn tại trong họ từ trước đến nay để phá bỏ nó',
      tags: ['tư duy', 'chuyển đổi', 'niềm tin', 'dễ dàng']
    },
    {
      id: '9',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135773.png',
      title: 'Sự kiện tiêu cực bất ngờ',
      desc: 'Mọi thứ tưởng chừng đang thuận lợi nhưng có một điều bất ngờ xảy ra.',
      examples: [
        'Tôi từng là một vận động viên ưu tú... cho đến khi sự cố gây sốc này đã thay đổi mọi thứ.',
        'Trong nhiều năm, tôi đã rao giảng về tự do tài chính nhưng sau đó tôi đã đánh mất tất cả chỉ trong chốc lát.',
        'Anh B đã xây dựng một đế chế bất động sản từ con số không, rồi mất tất cả trong một vụ lừa đảo không thể tưởng tượng được.'
      ],
      note: 'Yếu tố bất ngờ không thể đoán trước sẽ kích thích sự tò mò muốn tìm hiểu thêm. Đây là một cách kể chuyện vô cùng mạnh mẽ.',
      tags: ['bất ngờ', 'drama', 'sự kiện', 'cảnh báo']
    },
    {
      id: '10',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135820.png',
      title: 'Mới lạ, đột phá',
      desc: 'Một điều gì đó mới/vượt trội/đột phá',
      examples: [
        'Công thức mới làm kim chi này sẽ khiến bạn không thể cưỡng lại được.',
        'Cách ăn mặc mới này sẽ giúp bạn siêu thu hút đổi với các cô gái.',
        'Đây là chiếc bàn trải điện có công nghệ A đột phá nhất trên thị trường.'
      ],
      note: 'Tạo sự tò mò cho người xem về một điều gì đó mới, đột phá',
      tags: ['mới lạ', 'đột phá', 'sáng tạo', 'hot trend']
    },
    {
      id: '11',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135816.png',
      title: 'Khám phá chưa ai biết đến ',
      desc: 'Chia sẽ những thứ chưa được nhiều người khám phá',
      examples: [
        '03 ứng dụng năng suất ít được biết đến này là những ứng dụng cần phải có đối với những chuyên gia bận rộn.',
        '03 tiện ích mở rộng trình duyệt chưa được chú ý này là những yếu tố thay đổi cuộc chơi về năng suất.',
        'Đây là cách kiếm tiền online thông minh nhưng ít người biết đến.'
      ],
      note: 'Tận dụng sức hấp dẫn của sự khan hiếm để khiến người xem có cảm giác nằm trong số ít những người độc quyền "biết rõ.',
      tags: ['khám phá', 'hiếm', 'bí mật', 'độc quyền']
    },
    {
      id: '12',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
      title: 'Hành trình truyền cảm hứng',
      desc: 'Mở đầu bằng cách chia sẻ về hành trình thay đổi bản thân của bạn',
      examples: [
        'Tôi đã vượt qua sự nhút nhát để trở thành một diễn giả tự tin trước công chúng như thế nào?',
        'Sự thay đổi tư duy này đã đưa tôi từ tình trạng kiệt sức, mất phương hướng, trở thành một doanh nhân thành đạt.',
        'Hành trình của tôi từ phá sản đến khi trả hết nợ và đạt được tự do tài chính.'
      ],
      note: 'Chia sẻ trải nghiệm của chính bản thân bạn khi vượt qua khó khăn, hoặc thực hiện thử thách sẽ có sức thu hút vô cùng lớn với người khác.',
      tags: ['hành trình', 'truyền cảm hứng', 'vượt khó', 'cá nhân']
    },
    {
      id: '13',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135802.png',
      title: 'Quan điểm gây tranh cãi',
      desc: 'Chia sẻ quan điểm cá nhân gây tranh cãi, khiêu khích người khác, nhấn mạnh vào yếu tố tranh cãi',
      examples: [
        'Món đồ tôi đang cầm trên tay sẽ là thứ hữu ích nhất bạn mua được trong 2025',
        'Xếp hạng 05 trường đại học vô dụng nhất Việt Nam',
        'Các bậc cha mẹ đang phạm một sai lầm lớn khi bảo vệ con khỏi điều này.'
      ],
      note: 'Khai thác sự phẫn nộ, bất đồng và các ý kiến mạnh mẽ sẽ làm tăng tính lan truyền. Nhưng cần khéo léo sử dụng nếu không sẽ phản tác dụng ngược.',
      tags: ['tranh cãi', 'gây sốc', 'khiêu khích', 'viral']
    },
    {
      id: '14',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135812.png',
      title: 'Ma thuật bị cấm',
      desc: 'Chia sẽ những kiến thức có vẻ bí mật, bị cấm, bị hạn chế không cho nhiều người tiếp cận',
      examples: [
        'Tiết lộ những chiến thuật giảm cân mà các huấn luyện viên cá nhân đã bí mật sử dụng.',
        'Tăng cường trao đổi chất của bạn với thủ thuật bí mật mà các huấn luyện viên cá nhân luôn giấu cho riêng mình.'
      ],
      note: 'Mong muốn trở thành "người trong cuộc" để biết được những kiến thức bị cấm luôn có sức hấp dẫn mạnh mẽ.',
      tags: ['bí mật', 'bị cấm', 'hiếm', 'ma thuật']
    },
    {
      id: '15',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135786.png',
      title: 'Dễ dàng, nhanh chóng',
      desc: 'Khiến mọi thứ đơn giản, dễ dàng',
      examples: [
        'Lập kế hoạch tài chính một cách dễ dàng bằng cách sau.',
        'Dễ dàng mua nhà ở tuổi 30 với các kỹ năng sau',
        'Khám phá cách tạo một trang web chuyên nghiệp một cách dễ dàng chỉ bằng vài bước sau.'
      ],
      note: 'Tạo hứng thú và tò mò lớn cho người xem khi hứa hẹn về một cách dễ dàng để giải quyết các vấn đề.',
      tags: ['dễ dàng', 'nhanh chóng', 'giải pháp', 'mẹo']
    },
    {
      id: '16',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135782.png',
      title: 'Kết quả to, công sức nhỏ',
      desc: 'Đạt được kết quả lớn với nguồn lực thấp, nhờ vào một điều gì đó',
      examples: [
        'Thành thạo tiếng Anh chỉ sau 03 tháng nhờ bí quyết này',
        'Chỉ mất 07 ngày tán đổ crush của bạn nhờ các hành động sau',
        'Răng trắng hơn nhiều lần chỉ sau 01 tháng sử dụng sản phẩm này.'
      ],
      note: 'Đánh vào tâm lí thích sự dễ dàng của người xem, khiến họ tò mò vội ấn vào xem để tìm ra giải pháp.',
      tags: ['hiệu quả', 'dễ dàng', 'bứt phá', 'tối ưu']
    },
    {
      id: '17',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135784.png',
      title: 'Thứ tốt nhất từng biết',
      desc: 'Một thứ gì nhất, mà mình/bạn từng biết',
      examples: [
        'Đây là quán ăn ngon nhất mà mình từng biết.',
        'Loại nước hoa dùng cuốn hút nhất mà mình từng biết.',
        'Đây là cách nhanh nhất để học tiếng Anh mà bạn từng biết.'
      ],
      note: 'Nhấn mạnh vào từ "nhất" trong tâm trí người xem, tạo sự tò mò lớn khiến họ ngay lập tức xem đến cuối để biết.',
      tags: ['nhất', 'so sánh', 'top', 'đề xuất']
    },
    {
      id: '18',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135788.png',
      title: 'Hiểu sai và sự thật',
      desc: 'Nhận định sai (theo chiều hướng tiêu cực) - Phát hiện ra sự thật (theo chiều hướng tích cực)',
      examples: [
        'Bạn bè mình đều nghĩ chai nước hoa này giá vài triệu - nhưng khi biết giá của nó, đa phần đều sốc',
        'Bạn cho rằng trượt đại học là thất bại - Nhưng thực ra đây là một cơ hội để bứt phá.'
      ],
      note: 'Tạo ra một câu chuyện lôi kéo sự chú ý bằng cách sử dụng sự đối lập giữa nhận định sai - đúng',
      tags: ['so sánh', 'bất ngờ', 'sự thật', 'hiểu lầm']
    },
    {
      id: '19',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135790.png',
      title: 'Tại sao? Tìm hiểu ngay',
      desc: 'Đặt câu hỏi với từ "tại sao" để thu hút người xem.',
      examples: [
        'Tại sao quyển sách này lại bán hết 01 triệu bản chỉ trong 03 tháng?',
        'Tại sao chúng ta nên quan tâm đến sự biến đổi khí hậu?',
        'Tại sao cần học tiếng  Trung ngay lập tức?'
      ],
      note: 'Tạo sự tò mò, kích thích tư duy phân tích rồi tự trả lời của người xem và sau đó họ sẽ muốn xem đến cuối để biết kết quả.',
      tags: ['câu hỏi', 'tò mò', 'phân tích', 'lý do']
    },
    {
      id: '20',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135794.png',
      title: 'Thử thách trí tuệ',
      desc: 'Đưa ra các câu hỏi hoặc tình huống đánh đố để thử thách người xem',
      examples: [
        'Trả lời 07 câu hỏi này để xem bạn có tố chất trở thành nahf lãnh đạo không?',
        'Trả lời 05 tình huống sau xem bạn có vượt qua được nếu bị lạc trong rừng không?',
        'Cách bạn trả lời 10 câu hỏi sau sẽ biết được bạn có phải người hấp dẫn không?'
      ],
      note: 'Đánh vào lòng hiếu thắng của con người muốn thử thách và vượt qua khó khăn, nên người xem rất dễ xem tiếp để biết kết quả.',
      tags: ['thử thách', 'đánh đố', 'trí tuệ', 'game']
    },
    {
      id: '21',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135795.png',
      title: 'Miễn phí, miễn phí',
      desc: 'Tặng miễn phí một thứ gì đó',
      examples: [
        'Tặng miễn phí một khóa học trực tuyến về kỹ năng giao tiếp hiệu quả.',
        'Tặng miễn phí 05 công cụ trực tuyến để edit video chuyên nghiệp nếu bạn thực hiện theo cadcs bước sau đâu.',
        'Xem đến cuối video này để nhận một món quà miễn phí bất ngờ, đảm bảo bạn sẽ thích.'
      ],
      note: 'Tạo giá trị tức thì cho người xem, khiến họ hứng thú và đánh giá cao lòng hiếu khách của tác giả.',
      tags: ['miễn phí', 'quà tặng', 'ưu đãi', 'giá trị']
    },
    {
      id: '22',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135796.png',
      title: 'Chuyến đi hoài niệm',
      desc: 'Chia sẻ những ký ức hoài niệm để kích hoạt phản ứng cảm xúc mạnh mẽ.',
      examples: [
        'Còn ai còn nhớ cảm giác đi xin từng giọt mực trong lớp ngày xưa không?',
        'Bạn có nhớ những niềm vui đơn giản khi xem phim hoạt hình vào sáng thứ bảy không?',
        'Đây là những món ăn vặt kinh điển đã gắn liền với tuổi thơ của thế hệ 8x, 9x.'
      ],
      note: 'Sự tích cực và thoải mái gắn liền với nỗi nhớ khiến mọi người dễ bị thu hút và tiếp thu nội dung bạn truyền tải.',
      tags: ['hoài niệm', 'ký ức', 'cảm xúc', 'tuổi thơ']
    },
    {
      id: '23',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135797.png',
      title: 'Nhận xét đắt giá',
      desc: 'Đưa ra các lời nhận xét và đánh giá của bản thân về một sự kiện',
      examples: [
        'Mình chưa bao giờ thấy một người tồi tệ như người này',
        'Lần đầu tiên trong đời mình được ăn ở 01 quán ăn ngon như thế này',
        'Đây sẽ là loại nước hoa mình dùng đến cuối đời'
      ],
      note: 'Lời nhận xét càng hay và tạo sẹ tò mò càng tốt, cách viết móc này càng hiệu quả mạnh khi thương hiệu cá nhân bạn càng lớn.',
      tags: ['nhận xét', 'đánh giá', 'cá nhân', 'ấn tượng']
    },
    {
      id: '24',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135798.png',
      title: 'Danh sách cần biết ngay',
      desc: 'Đề cập đến một danh sách, con số cụ thể',
      examples: [
        '05 cách để trở nên giàu có hơn.',
        '07 lí do bạn nên làm kênh Youtube ngay bây giờ.',
        '03 điều mà không ai nói với bạn về các khóa học làm giàu'
      ],
      note: 'Tạo ra tính cụ thể cũng như dễ đo lường trong tâm trí người xem, cách viết móc này cũng giúp bạn dễ phát triển nội dung phía dưới',
      tags: ['danh sách', 'con số', 'gợi ý', 'must-know']
    },
    {
      id: '25',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135799.png',
      title: 'Người nổi tiếng nói...',
      desc: 'Chứng minh, nhận xét về lời nói/hành động/quan điểm của người nổi tiếng',
      examples: [
        'Nghe nói đây là chiếc điện thoại ca sĩ A yêu thích nhất, cùng tiềm hiểu xem nhé',
        'Có thực sự các nghệ sĩ A, B, C đã ăn chặn tiền từ thiện không, cùng tìm hiểu lý do.',
        'Cô nghệ sĩ D nói rằng không bao giờ được yêu đàn ông nghèo, bạn thấy thế nào?'
      ],
      note: 'Tận dụng sẵn hình ảnh, danh tiếng của những người nổi tiếng kiểu đứng trên vai người khổng lồ để thu hút người xem.',
      tags: ['người nổi tiếng', 'influencer', 'trích dẫn', 'uy tín']
    },
    {
      id: '26',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135800.png',
      title: 'Ngược dòng đám đông',
      desc: 'Có qan điểm trái ngược với một quan điểm đang được số đông đồng tình, nhấn mạnh vào khác biệt',
      examples: [
        'Ai cũng mong ổn định, nhưng cuộc sống đáng sống chính là một cuộc phiêu lưu',
        'Tài sản thực sự của bạn không phải tiền bạc hay vật chất bên ngoài, mà chính là những thứ này...',
        'Uống nhiều nước tốt cho sức khỏe... Hãy cẩn thận lời khuyên này.'
      ],
      note: 'Gây ấn tượng ban đầu và tạo ra sự tò mò lớn về quan điểm khác biệt với số đông khiến người xem muốn xem tiếp để nghe bạn phân tích.',
      tags: ['khác biệt', 'ngược dòng', 'phản biện', 'suy ngẫm']
    },
    {
      id: '27',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135801.png',
      title: 'Chê bai? Tìm hiểu thực hư',
      desc: 'Đưa ra một lời chê gay gắt về một việc, nhưng lời chê đó lại chính là lời khen',
      examples: [
        'Chiếc đồng hồ này có giá thành quá cao nhưng chính vì thế rất nhiều người mua nó.',
        'Những ý tưởng học tiếng Anh sau nghe có vẻ vớ vẩn, nhưng nó sẽ giúp ích cho bạn.'
      ],
      note: 'Tạo ra sự bất ngờ, tò mò cho người xem khiến họ tìm hiểu sao lại có góc nhìn trái ngược như vây.',
      tags: ['chê bai', 'bất ngờ', 'góc nhìn', 'thực hư']
    },
    {
      id: '28',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135803.png',
      title: 'Ngôn từ mạnh mẽ, phóng đại',
      desc: 'Sử dụng ngôn từ kịch tính, phóng đại để kích thích trí tưởng tượng',
      examples: [
        'Bạn sẽ ngủ như một ông hoàng bà chúa với sản phẩm đệm mới của chúng tôi',
        'Trở nên hấp dẫn như một idol Kpop ngay sau khi bạn dùng loại nước hoa này.',
        'Quyển sách này sẽ đưa bạn vào mọt hành trình kỳ diệu cùng thế giới thần thoại mà trong mơ bạn cũng không tưởng tượng nổi'
      ],
      note: 'Tạo sự hấp dẫn và tò mò lớn cho người xem bằng những từ ngữ kịch tính, phóng đại. Tuy nhiên người mới cần dùng cẩn thận không thành phản cảm.',
      tags: ['phóng đại', 'kịch tính', 'tưởng tượng', 'viral']
    },
    {
      id: '29',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135804.png',
      title: 'Trích dẫn nổi tiếng',
      desc: 'Tìm các quote, câu trích dẫn hay trên mạng hoặc câu nói của người nổi tiếng nào đó rồi đăng làm câu mở đầu. Sau đó bạn sẽ giới thiệu sản phẩm hoặc trình bày nội dung của bạn liên quan đến câu trích dẫn đó.',
      examples: [
        
      ],
      note: 'Điểm mạnh của cách viết này là những trích dẫn hay, câu nói của người nổi tiếng lan truyền trên mạng đều đã chứng minh được tính viral của nó, việc bạn lấy chúng làm câu mở đầu sẽ đảm bảo bạn luôn có sẵn một tệp người xem nhất định',
      tags: ['trích dẫn', 'nổi tiếng', 'câu nói hay', 'inspire']
    },
    {
      id: '30',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135805.png',
      title: 'Bắt trend nóng bỏng tay',
      desc: 'Nhận xét cá nhân về một vấn đề hot trend ở hiện tại',
      examples: [
        'Ca sĩ A có xứng đáng bị báo trí lên án nhiều như thế không?',
        'Sự thật đáng buồn về bữa ăn của các vận động viên.',
        'Tận dụng nhà sư B để làm content liệu có là con đường đúng đắn?'
      ],
      note: 'Dựa vào những sự việc đang nóng hổi, hot trend ở hiện tại để tạo nên sự thu hút.',
      tags: ['trend', 'hot', 'thời sự', 'bình luận']
    },
    {
      id: '31',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135806.png',
      title: 'Từ chê cười đến bất ngờ',
      desc: 'Đưa ra một tình huống bị mọi người chê cười nhưng sau đó tất cả phải bất ngờ.',
      examples: [
        'Mọi người chê cười khi mình mua chiếc bánh này, nhưng liền thay đổi suy nghĩ khi ăn thử miếng đầu tiên.',
        'Ai cũng chê cười giọng nói khàn khàn của A nhưng khi A cất tiếng hát, tất cả đều phải im lặng.'
      ],
      note: 'Tạo sự kết nối và đồng cảm với người xem về câu chuyện bạn hoặc người nào đó bị chê cười nhưng sau đó tạo sự bất ngờ ở phía sau.',
      tags: ['bất ngờ', 'chê cười', 'cảm xúc', 'lật ngược']
    },
    {
      id: '32',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
      title: 'Tiền , tiền, tiền',
      desc: 'Đề cập các vấn đề, sự kiện liên quan đến tiền, hoặc liệt kê các con số tiền cụ thể',
      examples: [
        'Bạn sẽ tiết kiệm được hàng triệu đồng mỗi tháng nếu làm theo cách sau.',
        'Học 05 kỹ năng này sẽ giúp bạn kiếm được 20.000 đô mỗi tháng dễ dàng',
        'Cách kiếm tiền online dễ nhất dành cho người mới.'
      ],
      note: 'Bản năng của con nguoiwf luôn bị thu hút bởi tiển bạc, vật chất nên sẽ tương tác cực kì mạnh với những nội dung đề cập đến tiền',
      tags: ['tiền', 'tài chính', 'con số', 'vật chất']
    },
    {
      id: '33',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135808.png',
      title: 'Số liệu gây sốc',
      desc: 'Đưa ra các số liệu, thống kê gây sốc',
      examples: [
        '93% giao tiếp là phi ngôn ngữ - đây là cách để làm chủ nó.',
        'Cứ 03 người Việt Nam thì có 01 người có ít hơn 100 triệu tiết kiệm khi nghỉ hưu.',
        'Chỉ 13% nhân viên cảm thấy thực sự gắn kết và có động lực trong công việc.'
      ],
      note: 'Mọi người bị thu hút bởi những thông tin hiếm, mới lạ hoặc đáng ngạc nhiên, đặc biệt là các số liệu tạo cảm giác đã được xác thực.',
      tags: ['số liệu', 'thống kê', 'gây sốc', 'bất ngờ']
    },
    {
      id: '34',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135809.png',
      title: 'Cảnh báo xu hướng mới',
      desc: 'Mở đầu bằng cách tiết lộ một xu hướng, trend đang hoặc sẽ xảy ra',
      examples: [
        'Hãy chuẩn bị tinh thần - cơn sốt mô hình kinh doanh online mới này sắp chiếm lĩnh năm nay.',
        'Các nhà tâm lý học cho rằng phương pháp nuôi dạy con cái này sẽ rất phổ biến vào năm A.',
        'Loại content này trong 10 ngày tới sẽ siêu hot trên Tiktok, hãy tận dụng ngay.'
      ],
      note: 'Mọi người luôn tìm cách đón đầu xu hướng và không muốn "bỏ lỡ" các xu hướng mới.',
      tags: ['cảnh báo', 'xu hướng', 'trend', 'dự báo']
    },
    {
      id: '35',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
      title: 'Uy tín đảm bảo, lời khuyên đắt giá',
      desc: 'Thể hiện bản thân là người uy tín để đưa ra nhận xét',
      examples: [
        'Tôi đã làm Editor 10 năm và khẳng định phần mềm này là một công cụ thay đổi cuộc chơi',
        'Là một nhà văn đã xuất bản 03 cuốn sách, công cụ AI này đã thay đổi hẳn cách tôi sáng tạo.',
        'Sau 20 năm bán hàng, tôi đã tìm ra cách tăng năng suất tối ưu.'
      ],
      note: 'Khi chứng minh bạn là một người uy tín, có chuyên môn thì lời khuyên bạn đưa ra sẽ được người xem chú ý hơn',
      tags: ['uy tín', 'lời khuyên', 'chuyên gia', 'đắt giá']
    },
    {
      id: '36',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135811.png',
      title: 'Tuyên bố táo bạo, cách làm mới',
      desc: 'Đưa ra lời tuyên bố, khẳng định táo bạo về cách làm mới',
      examples: [
        'Mở khóa bí quyết kiếm 10.000 USD mỗi tháng chỉ với 02 giờ mỗi ngày',
        'Khám phá một thủ thuật đơn giản để giảm 10kg trong 30 ngày ( không cần ăn kiêng).',
        'Tìm hiểu sự thay đổi tư duy phi truyền thống đã cho phép tôi tăng năng suất gấp 10 lần chỉ sau một đêm'
      ],
      note: 'Những tuyên bố táo bạo và những lời hứa đầy tham vọng sẽ khơi dậy mong muốn chuyển đổi, khai thác những khát vọng của người xem',
      tags: ['tuyên bố', 'đột phá', 'cách làm mới', 'tham vọng']
    },
    {
      id: '37',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135812.png',
      title: 'Thói quen nhỏ, thay đổi lớn',
      desc: 'Tiết lộ một thay đổi thói quen nhỏ nhưng tạo ra kết quả lớn cho cuộc sống',
      examples: [
        'Tiết lộ một thay đổi thói quen nhỏ này đã giúp tôi trả nợ nhanh hơn gấp 10 lần',
        'Thói quen nhỏ bất ngời khiến nỗi lo âu, mất ngủ của tôi bỗng nhiên biến mất',
        'Thói quen đầu tư đơn giản này đã giúp giá trị tài sản ròng của tôi tăng lên 40%'
      ],
      note: 'Con người là kết quả của những thói quen, tiết lộ việc chỉ cần điều chỉnh một thói quen nhỏ nhưng có thể thay đổi cuộc sống sẽ tạo ra sự thu hút',
      tags: ['thói quen', 'thay đổi', 'hiệu quả', 'bứt phá']
    },
    {
      id: '38',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135813.png',
      title: 'Khám phá của chuyên gia',
      desc: 'Một tổ chức/người nổi tiếng/nhà khoa học có uy tín chuyên môn phát biểu/khám phá một điều gì đó',
      examples: [
        'Các nhà khoa học mỹ vừa tìm ra 01 hóa thạch người ngoài hành tinh.',
        'Nhà khoa học nổi tiếng A vừa chứng minh chuyện nhân quả là có thật bằng các phương pháp khoa học.',
        'Tổ chức y tế thế giới khuyến cáo về 01 đại dịch mới.'
      ],
      note: 'Lập tức thu hút người xem về một vấn đề mới do các tổ chức và người nổi tiếng, uy tín phát hiện. Tạo sự tò mò, thôi thúc họ xem tiếp để tìm hiểu thêm.',
      tags: ['chuyên gia', 'khám phá', 'khoa học', 'uy tín']
    },
    {
      id: '39',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135814.png',
      title: 'Kết nối, đồng cảm, lời khuyên',
      desc: 'Xây dựng lòng tin và sự xác thực thông qua trải nghiệm cá nhân của bạn mà khán giả có thể liên tưởng đến',
      examples: [
        'Là một người từng bị mất ngủ, tôi biết cuộc đấu tranh để có được giấc ngủ ngon khó khăn thế nào. Đây là cách tôi giải quyết nó.',
        'Tôi cũng là nguoiwf sợ nói trước đám đông - cho đến khi tôi khám phá ra những kỹ thuật này.'
      ],
      note: 'Mọi nguoiwf bị thu hút và tin tưởng bởi những câu chuyện khiến họ cảm thấy được thấu hiểu',
      tags: ['kết nối', 'đồng cảm', 'lời khuyên', 'trải nghiệm']
    },
    {
      id: '40',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135815.png',
      title: 'Người khác khen, bạn nên thử',
      desc: 'Một người chia sẻ điều tích cực sau khi sử dụng/trải nghiêm/thay đổi một điều gì đó',
      examples: [
        'Nhà sáng tạo nội dung A đã nói rằng chiếc mic thu âm này chính là thứ anh tìm kiếm 10 năm nay.',
        'Doanh nhân B nói rằng dịch vụ này đã giúp anh ấy tối ưu khả năng quản lý nhân sự rất nhiều',
        'Chuyên gia thể hình C chia sẻ sản phẩm giảm cân này là thứ tốt nhất trong đời ông ấy dùng'
      ],
      note: 'Tạo sự uy tín, khách quan từ việc được người khác chia sẻ. Câu chuyện về trải nghiệm của người khác dễ thể hiện giá trị và thu hút quan tâm hơn đói với người xem.',
      tags: ['review', 'trải nghiệm', 'đề xuất', 'khách quan']
    },
    {
      id: '41',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135816.png',
      title: 'Đau khổ ư? Đây là giải pháp',
      desc: 'Xoáy vào nỗi đâu, đưa ra giải pháp',
      examples: [
        'Đấu tranh để duy trì động lực? Thủ thuật kỳ lạ này đã giúp tôi tiếp tục',
        'Dùng đủ phương pháp vẫn không thể giảm cân, đây sẽ là phương pháp đúng nhất cho bạn.',
        'Sự nghiệp giậm chân tại chỗ vì kém giao tiếp, Học ngay khóa học "Bậc Thầy Giao Tiếp" để trở thành một con người mới'
      ],
      note: 'Xoáy vào nỗi đau để tạo ra cảm xúc lớn cho người xem, và sau đó là đưa ra giải pháp với lời hứa hẹn giải quyết nỗi đau đó hoàn toàn.',
      tags: ['nỗi đau', 'giải pháp', 'cảm xúc', 'hành động']
    },
    {
      id: '42',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135817.png',
      title: 'Quan tâm gia đình',
      desc: 'Đề cập đến bố mẹ, người thân thiết',
      examples: [
        'Bạn đã quen tâm đúng cách đối với bố mẹ già và con nhỏ của mình chưa, ở đây dúng mình có giải pháp',
        'Đây là món đồ mình mua thường xuyên để chăm sóc sức khỏe cho bố mẹ mình',
        'Con cái bạn sẽ phát triển rất tốt nếu bạn làm điều này cho chúng mỗi ngày'
      ],
      note: 'Tạo ra liên kết tình cảm và gợi lên nhu cầu được chăm sóc người thân khiến cho người xem tò mò và thôi thúc muốn xem tiếp',
      tags: ['gia đình', 'tình cảm', 'chăm sóc', 'người thân']
    },
    {
      id: '43',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135818.png',
      title: 'Bí mật ẩn giấu, biết chưa?',
      desc: 'Sự thật, bí mật về một điều gì mà bạn không biết',
      examples: [
        'Sự thật trần trụi về các khóa học làm giàu ở Việt Nam mà bạn cần phải biết',
        'Bí mật về vợ của bạn mà bạn cần biết sớm trước khi quá muộn',
        'Một sự thật nguy hiểm về nước ngọt mà có thể bạn không biết'
      ],
      note: 'Ai cũng rất thích tìm hiểu các bí mật thầm kín, nhất là nếu đúng bí mật về lĩnh vực họ quan tâm thì họ không thể hông xem tiếp',
      tags: ['bí mật', 'ẩn giấu', 'sự thật', 'khám phá']
    },
    {
      id: '44',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135819.png',
      title: 'Lợi ích ngay trước mắt',
      desc: 'Nêu điểm nổi bật của dịch vụ, sản phẩm sau đó cam kết lợi ích',
      examples: [
        'Chiếc máy massage 3 in 1 này có thể xoa bóp tất cả các vị trí, sẽ giúp cơ thể bạn được nghỉ ngơi và thư thái sau ngày dài mệt mỏi',
        'Với camera 108 megapixel cùng 15 công nghệ đột phá mới, chiếc điện thoại này sẽ giúp bạn có những bức ảnh đẹp như phim.',
        'Cách bạn trả lời 10 câu hỏi sau sẽ biết được bạn có phải người hấp dẫn không?'
      ],
      note: 'Tạo ra sự liên kết trực tiếp về điểm nổi bật của dịch vụ/sản phẩm với lợi ích mà người xem nhận được nếu sử dung, kích thích họ tiếp tục xem, tìm hiểu',
      tags: ['lợi ích', 'sản phẩm', 'giá trị', 'cam kết']
    },
    {
      id: '45',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135820.png',
      title: 'Cảnh báo, khẩn cấp',
      desc: 'Đưa ra lời cảnh báo cho người xem',
      examples: [
        'Nếu muốn nghỉ việc theo đuổi đam mê, bạn phải xem lời cảnh báo này',
        'Có một thảm họa đang tiềm ẩn ngay bên cạnh bạn mỗi ngày mà bạn cần phải biết',
        'Cảnh báo một đồ vật quen thuộc trong nhà nhưng là tác nhân gây ung thư cực lớn.'
      ],
      note: 'Tạo ra sự căng thẳng, áp lực khiến người xem tập trung vào xem tiếp',
      tags: ['cảnh báo', 'khẩn cấp', 'an toàn', 'chú ý']
    },
    
  ]; 