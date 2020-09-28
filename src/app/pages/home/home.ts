import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  data: any = [];
  imagesData: any = [];

  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    public menu: MenuController,

  ) {
    this.data = [
{
  imageUrl: 'https://static.techspot.com/images2/news/bigimage/2020/03/2020-03-16-image-57.jpg'
},
{
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',

},
{
  imageUrl: 'https://s23991.pcdn.co/wp-content/uploads/2019/04/better-brined-chicken-finished-fp.jpg'
}
    ];
    this.imagesData = [
      {
        imageUrl: 'https://image.shutterstock.com/image-photo/chicken-sunset-260nw-752120836.jpg',
        title: 'Chicken'
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXGPDLp0O7TzaA0mUkOLXBYxm_zyp5U_VHxg&usqp=CAU',
        title: 'Mutton'


      },
      {
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg',
        title: 'Vegetables'

      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYfGF5WAZ1M_fto2In6Z75tEGGFE-i6tVOw&usqp=CAU',
        title: 'Seafoods'

      },
      {
        imageUrl: 'https://www.villages-news.com/wp-content/uploads/2019/12/Eggs.jpg',
        title: 'Eggs'
      },
      {
        imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
        title: 'Fruits'
      },
      {
        imageUrl: 'https://static.toiimg.com/photo/77550287.cms',
        title: 'Dairy'
      },
      {
        imageUrl: 'https://i.pinimg.com/originals/21/5e/31/215e31a98cb6fd49cf29b70d8af45d6c.png',
        title: 'Grocery'
      }

    ];

   }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }
  ionViewWillEnter() {
    this.menu.enable(true);
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
