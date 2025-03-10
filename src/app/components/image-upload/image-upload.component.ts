import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-upload',
  imports: [CommonModule, FormsModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  standalone: true,
})
export class ImageUploadComponent implements OnInit {
  selectedFile: File | null = null;
  images: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (!this.selectedFile) return;
    this.imageService.uploadImage(this.selectedFile).subscribe(() => {
      this.fetchImages();
      this.selectedFile = null;
    });
  }

  fetchImages(): void {
    this.imageService.getImages().subscribe((images) => {
      this.images = images;
    });
  }
}
