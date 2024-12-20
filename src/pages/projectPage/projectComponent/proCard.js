import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ year, image, name, description, tags ,onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageContainer>
        <img src={image} alt={`${name} 프로젝트`} />
      </ImageContainer>
      <YearBadge>{`${year}기`}</YearBadge>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag}>{tag}</Tag>
        ))}
      </TagContainer>
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  width: 300px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const YearBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 12px;
  padding: 4px 12px;
  display: inline-block;
  margin-bottom: 12px;
`;

const ProjectName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333333;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 16px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: ${({ tag }) => 
    tag.toLowerCase() === 'react' ? 'rgba(229, 138, 123, 0.3)' :
    tag.toLowerCase() === 'spring' ? 'rgba(39, 152, 255, 0.3)' : '#f1f1f1'};
  color: ${({ tag }) => 
    tag.toLowerCase() === 'react' ? '#E58A7B' :
    tag.toLowerCase() === 'spring' ? '#2798FF' : '#333'};
  font-size: 14px;
  font-weight: bold;
  border-radius: 12px;
  padding: 4px 8px;
`;
